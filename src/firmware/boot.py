import esp, esp32, gc, wifi, micropython
import urequests

esp.osdebug(esp.LOG_ERROR)
gc.enable()

micropython.alloc_emergency_exception_buf(100)

# Initialize non-volatile storage instance
nvs = esp32.NVS('data')

# ===================================
# Variable to hold current wifi mode
# ===================================
# Wifi modes:
# - 1 => Measure mode
# - 2 => Update mode
# ===================================
wifi_mode = 0

try:
    # Read current wifi mode from non-volatie storage
    print('Reading current wifi mode...')
    nvs.set_i32('wifi_mode', 2)
    wifi_mode = nvs.get_i32('wifi_mode')
except OSError as ex:
    print('No wifi mode set!')

    # Write wifi mode to non-volatile storage if no value exists
    print('Defining wifi mode...')
    nvs.set_i32('wifi_mode', 1)
    nvs.commit()
    wifi_mode = 1

print('Current wifi mode: ', wifi_mode)

if wifi_mode == 1:
    # Start wifi as access point (measure mode)
    wifi.start_ap()
else:
    # Start wifi as station (update mode)
    wifi.start_st()