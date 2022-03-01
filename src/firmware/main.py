from MicroWebSrv2 import *
from time import sleep
from _thread import allocate_lock
from machine import Pin
import json
import time

def OnWebSocketAccepted(microWebSrv2, webSocket):
    print('   - User   : %s:%s' % webSocket.Request.UserAddress)
    onWsConnect(webSocket)
    # Todo: Check if Measuring is running

def onWsConnect(webSocket):
    webSocket.OnTextMessage = onWsReceived
    webSocket.onClosed = onWsClosed
    with _lock:
        global _webSockets
        _webSockets.append(webSocket)

def onWsReceived(webSocket, msg):
    print(msg)
    addr = webSocket.Request.UserAddress
    jsonMsg = json.loads(msg)
    with _lock:
        global _webSockets
        global _measurement
        if "start" in jsonMsg:
            if jsonMsg['start'] == True:
                if _measurement['isMeasuring'] == False:
                    _measurement['isMeasuring'] = True
                    _measurement['start'] = time.time()
                    _measurement['end'] = 0
                    print('Starting time measuring...')
                for ws in _webSockets:
                    onWsSend(ws, json.dumps(_measurement))

def onWsSend(webSocket, msg):
    webSocket.SendTextMessage(msg)

def onWsClosed(webSocket):
    addr = webSocket.Request.UserAddress
    with _lock:
        global _webSockets
        if webSocket in _webSockets:
            _webSockets.remove(webSocket)

def handleInterrupt(pin):
    with _lock:
        global _webSockets
        global _measurement
        if _measurement['isMeasuring'] == True:
            print('End measuring...')
            _measurement['isMeasuring'] = False
            _measurement['end'] = time.time()
            for ws in _webSockets:
                onWsSend(ws, json.dumps(_measurement))
            _measurement = {
                "isMeasuring": False,
                "start": 0,
                "end": 0
            }
            

# Create global array for all connected users
global _webSockets
_webSockets = [ ]

global _lock
_lock = allocate_lock()

global _measurement
_measurement = {
    "isMeasuring": False,
    "start": 0,
    "end": 0
}

pin4 = Pin(4, Pin.IN, Pin.PULL_UP)
pin4.irq(trigger=Pin.IRQ_FALLING, handler=handleInterrupt)

# Loads the WebSockets module globally and configure it
wsMod = MicroWebSrv2.LoadModule('WebSockets')
wsMod.OnWebSocketAccepted = OnWebSocketAccepted

webServer = MicroWebSrv2()

# For embedded MicroPython, use a very light configuration
webServer.SetEmbeddedConfig()
webServer._slotsCount = 4

# Starts the server as easily as possible in managed mode
webServer.StartManaged()
print('Webserver started!')

# Main program loop until keyboard interrupt
try:
    while webServer.IsRunning:
        pass
except KeyboardInterrupt:
    pass

print('Stopping webserver...')
webServer.Stop()
print('Webserver stopped!')