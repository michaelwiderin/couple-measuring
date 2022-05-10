from senko import Senko
import machine, esp32

print ('Update mode started!')

OTA = Senko(user='michaelwiderin', repo='couple-measuring', working_dir='src/firmware', files=[
    'boot.py',
    'main.py',
    'button_handler.py',
    'measure_mode.py',
    'measure.py',
    'update_mode.py',
    'wifi.py'
])

if OTA.update():
    print('Updated to latest version!')
else:
    print('No updates available!')

print('Change mode to measure!')
nvs = esp32.NVS('data')
nvs.set_i32('wifi_mode', 1)

print('Start reboot...')
machine.reset()

try:
    while True:
        pass
except KeyboardInterrupt:
    print('Update keyboard interrupt')