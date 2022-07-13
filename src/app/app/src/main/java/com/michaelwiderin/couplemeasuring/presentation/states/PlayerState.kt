package com.michaelwiderin.couplemeasuring.presentation.states

data class PlayerState(
    var isRunning: Boolean = false,
    var currentPosition: Int = 0,
    var totalDuration: Int = 0
)
