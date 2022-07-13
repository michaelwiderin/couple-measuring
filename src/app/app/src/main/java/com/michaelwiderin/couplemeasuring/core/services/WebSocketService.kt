package com.michaelwiderin.couplemeasuring.core.services

import com.michaelwiderin.couplemeasuring.data.services.IWebSocketService

class WebSocketService : IWebSocketService {
    override fun connect() {
        println("WebSocketService: Default")
    }
}