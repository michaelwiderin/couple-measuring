import time

print('Hallo measure')

class Measure:
    def __init__(self):
        self.isRunning = False
        self._status = 1
        self._start = 0
        self._end = 0

    def Start(self):
        if self._status != 1:
            return False
        self.isRunning = True
        self._status = 2
        self._start = time.ticks_ms()
        return True

    def Finish(self):
        if self._status != 2:
            return None
        self._end = time.ticks_ms()
        message = {
            "status": 3,
            "time": time.ticks_diff(self._end, self._start)
        }
        self.Reset()
        return message

    def Cancel(self):
        self.Reset()

    def Reset(self):
        self.isRunning = False
        self._status = 1
        self._start = 0
        self._end = 0