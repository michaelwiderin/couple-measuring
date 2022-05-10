from micropython import const
from machine import Pin, Timer
import time

class Button:
    def __init__(self, pin, callback, trigger=Pin.IRQ_FALLING, min_ago=500):
        self.callback = callback
        self.min_ago = min_ago
        self._blocked = False
        self._next_call = time.ticks_ms() + self.min_ago
        pin.irq(trigger=trigger, handler=self.handle)

    def call_callback(self, pin):
        self.callback(pin)

    def handle(self, pin):
        if time.ticks_ms() > self._next_call:
            print('Handle button debounce!')
            self.call_callback(pin)
            self._next_call = time.ticks_ms() + self.min_ago