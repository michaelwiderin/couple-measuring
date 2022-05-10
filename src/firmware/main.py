import esp32

# Initialize non-volatile storage instance
nvs = esp32.NVS('data')

# ===================================
# Variable to hold current mode
# ===================================
# Modes:
# - 1 => Measure mode
# - 2 => Update mode
# ===================================
mode = 0

try:
    # Read current wifi mode from non-volatie storage
    print('Reading current mode...')
    mode = nvs.get_i32('wifi_mode')
except OSError as ex:
    print('No mode set!')
    mode = 1

print('Current mode: ', mode)

if mode == 1:
    import measure_mode
elif mode == 2:
    import update_mode
else:
    print('Mode is invalid, quitting program!')