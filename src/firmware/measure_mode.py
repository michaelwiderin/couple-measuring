from MicroWebSrv2 import *
from machine import Pin
from measure import Measure
from button_handler import Button
import json
import micropython
import machine
import esp32

print('Measure mode started!')
print('Hallo measure_mode')

def OnWebSocketAccepted(server, socket):
    socket.OnTextMessage = OnMessageReceived
    socket.OnClosed = OnConnectionClosed
    sockets.append(socket)

def OnConnectionClosed(socket):
    if socket in sockets:
        sockets.remove(socket)
    
    if len(sockets) == 0:
        print('No clients connected anymore!')
        OnMeasureCancel()

def OnMessageReceived(socket, msg):
    message = json.loads(msg)
    print('Message received: ', message)
    if message['status'] == 1:
        OnMeasureStart()
    elif message['status'] == 5:
        OnMeasureCancel()
    elif message['status'] == 10:
        OnStartUpdateMode()

def OnMeasureStart():
    print('Start measure...')
    if not measure.Start():
        return
    message = { "status": 2 }
    for socket in sockets:
        socket.SendTextMessage(json.dumps(message))
    print('Started measure!')

def OnMeasureFinish(args):
    if not measure.isRunning:
        return

    print('Finish measure...')
    message = measure.Finish()
    if message is None:
        return
    for socket in sockets:
        socket.SendTextMessage(json.dumps(message))
    print('Finished measure!')

def OnMeasureCancel():
    if not measure.isRunning:
        return

    print('Cancel measure...')
    measure.Cancel()
    print('Canceled measure!')

def OnButtonPressed(pin):
    print('Button pressed!')
    micropython.schedule(OnMeasureFinish, None)

def OnStartUpdateMode():
    nvs = esp32.NVS('data')
    nvs.set_i32('wifi_mode', 2)
    machine.reset()

sockets = []
measure = Measure()

button = Button(pin=Pin(4, Pin.IN, Pin.PULL_UP), callback=OnButtonPressed)

print('Load MicroWebSrv2 WebSockets module...')
module = MicroWebSrv2.LoadModule('WebSockets')
module.OnWebSocketAccepted = OnWebSocketAccepted

print('Create Webserver instance...')
server = MicroWebSrv2()
server.SetEmbeddedConfig()
server._slotsCount = 4

print('Webserver starting with managed pool!')
server.StartManaged(1, 0)
print('Webserver started successfully!')

try:
    while True:
        pass
except KeyboardInterrupt:
    print('Webserver shutdown started!')
    server.Stop()
    print('Webserver stopped successfully!')
