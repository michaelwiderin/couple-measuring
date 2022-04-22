from MicroWebSrv2 import *
from machine import Pin
from machine import Timer
import json

def OnWebSocketAccepted(server, socket):
    print('Connection for {} opened!'.format(socket.Request.UserAddress))
    socket.OnTextMessage = OnMessageReceived
    socket.OnClosed = OnConnectionClosed
    _sockets.append(socket)
    if _measureStatus == 2:
        socket.SendTextMessage(json.dumps({
            "status": 4
        }))

def OnConnectionClosed(socket):
    if socket in _sockets:
        _sockets.remove(socket)
        print('Connection for {} closed!'.format(socket.Request.UserAddress))

def OnMessageReceived(socket, msg):
    print('Message received from {}'.format(socket.Request.UserAddress))
    message = json.loads(msg)
    print(message)
    if message['status'] == 1:
        print('OnStartMeasure')
        OnStartMeasure()

def OnStartMeasure():
    global _measureStatus
    global _timer
    if _measureStatus == 1:
        _measureStatus = 2
        _timer.init(period=100, mode=Timer.PERIODIC, callback=OnTimerInterrupt)
        message = { "status": 2 }
        for socket in _sockets:
            socket.SendTextMessage(json.dumps(message))
        print('Measure started!')

def OnButtonPressed(pin):
    global _measureStatus
    global _timer
    global _time
    global _timeFactor
    if _measureStatus == 2:
        _timer.deinit()
        time = 0
        if _timeFactor > 1:
            time = (10000 * (_timeFactor - 1)) + _time
        else:
            time = _time
        message = { "status": 3, "time": time }
        _time = 0
        _timeFactor = 1
        _measureStatus = 1
        for socket in _sockets:
            socket.SendTextMessage(json.dumps(message))
        print('Measure stopped!')

def OnTimerInterrupt(t):
    global _time
    global _timeFactor
    _time += 100
    if _time == 10000:
        _time = 0
        _timeFactor += 1
    print('Interrupt: {}'.format(_time))

_sockets = []
_measureStatus = 1
_timer = Timer(-1)
_time = 0
_timeFactor = 1

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
