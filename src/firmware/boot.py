import esp
import gc
import wifi

esp.osdebug(None)
gc.enable()

wifi.connect()