package com.michaelwiderin.couplemeasuring

import java.util.concurrent.TimeUnit

fun Int.toDisplayTime(): String {
    val minutes = TimeUnit.MILLISECONDS.toMinutes(this.toLong()) % 60
    val seconds = TimeUnit.MILLISECONDS.toSeconds(this.toLong()) % 60
    val milliSeconds = TimeUnit.MILLISECONDS.toMillis(this.toLong()) % 1000 / 10

    if (minutes > 0) {
        return String.format("%02d:%02d:%02d", minutes, seconds, milliSeconds)
    }

    return String.format("%02d:%02d", seconds, milliSeconds)
}