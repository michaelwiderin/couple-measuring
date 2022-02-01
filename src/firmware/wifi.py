import network

# Default network configuration
# IP Address:   192.168.4.1
# Subnetmask:   255.255.255.0
def connect():
    ssid = 'Wettkampfgruppe'
    password = '12345678'

    ap = network.WLAN(network.AP_IF)
    ap.active(True)

    ap.config(essid=ssid, password=password)
    ap.config(authmode=3)
    ap.config(max_clients=5)

    while ap.active() == False:
        pass