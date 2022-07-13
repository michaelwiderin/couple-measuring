package com.michaelwiderin.couplemeasuring.presentation.states

import com.michaelwiderin.couplemeasuring.presentation.enums.NetworkMode

sealed class NetworkState {
    data class Loading(var message: String) : NetworkState()
    data class IsConnected(val mode: NetworkMode) : NetworkState()
    data class Error(var message: String) : NetworkState()
    object IsDisconnected : NetworkState()
}