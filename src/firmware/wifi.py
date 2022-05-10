import network

# Wifi credentials
ssid = 'Wettkampfgruppe'
pw = '12345678'

# ===========================================
# Start wifi as access point (Measure mode)
# ===========================================
# Default network configuration
# IP Address:   192.168.4.1
# Subnetmask:   255.255.255.0
# ===========================================
def start_ap():
    ap = network.WLAN(network.AP_IF)
    ap.active(True)

    ap.config(essid=ssid, password=pw)
    ap.config(authmode=3)
    ap.config(max_clients=1)

    while ap.active() == False:
        pass
# ===========================================
# Start wifi as station (Update mode)
# ===========================================
def start_st():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)

    if not wlan.isconnected():
        print('Connecting to wifi...')
        wlan.connect(ssid, pw)
        while not wlan.isconnected():
            pass
    
    print('Network config:', wlan.ifconfig())
    