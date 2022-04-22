from MicroWebSrv2 import *
from machine import Pin
import json
import time

def OnWebSocketAccepted(server, socket):
    global _sockets
    socket.OnTextMessage = OnMessageReceived
    socket.OnClosed = OnConnectionClosed
    _sockets.append(socket)
    if _measureStatus == 2:
        socket.SendTextMessage(json.dumps({
            "status": 4
        }))

def OnConnectionClosed(socket):
    global _sockets
    if socket in _sockets:
        _sockets.remove(socket)

def OnMessageReceived(socket, msg):
    message = json.loads(msg)
    if message['status'] == 1:
        OnStartMeasure()

def OnStartMeasure():
    global _sockets
    global _measureStatus
    global _timeStart
    if _measureStatus == 1:
        _measureStatus = 2
        _timeStart = time.ticks_ms()
        message = { "status": 2 }
        for socket in _sockets:
            socket.SendTextMessage(json.dumps(message))

def OnButtonPressed(pin):
    global _sockets
    global _measureStatus
    global _timeStart
    global _timeEnd
    if _measureStatus == 2:
        _timeEnd = time.ticks_ms()
        message = { "status": 3, "time": time.ticks_diff(_timeEnd, _timeStart) }
        _timeStart = 0
        _timeEnd = 0
        _measureStatus = 1
        for socket in _sockets:
            socket.SendTextMessage(json.dumps(message))

_sockets = []
_measureStatus = 1
_timeStart = 0
_timeEnd = 0

pin4 = Pin(4, Pin.IN, Pin.PULL_UP)
pin4.irq(trigger=Pin.IRQ_FALLING, handler=OnButtonPressed)

webSocketModule = MicroWebSrv2.LoadModule('WebSockets')
webSocketModule.OnWebSocketAccepted = OnWebSocketAccepted

webServer = MicroWebSrv2()
webServer.SetEmbeddedConfig()
webServer._slotsCount = 4

print('Webserver starting with managed pool!')
webServer.StartManaged(1, 0)
print('Webserver successfully started!')

try:
    while webServer.IsRunning:
        pass
except KeyboardInterrupt:
    print('Webserver shutdown started!')
    webServer.Stop()
    print('Webserver successfully stopped!')
