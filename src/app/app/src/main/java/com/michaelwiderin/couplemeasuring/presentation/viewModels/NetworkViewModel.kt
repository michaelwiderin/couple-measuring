package com.michaelwiderin.couplemeasuring.presentation.viewModels

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.michaelwiderin.couplemeasuring.presentation.enums.NetworkMode
import com.michaelwiderin.couplemeasuring.presentation.states.NetworkState
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

class NetworkViewModel @Inject constructor() : ViewModel() {

    private val _state = MutableStateFlow<NetworkState>(NetworkState.Loading("Netzwerk wird überprüft..."))
    val state = _state.asStateFlow()

    fun continueWithLocalMode() {
        if (_state.value is NetworkState.Loading) {
            _state.value = NetworkState.IsConnected(NetworkMode.LOCAL)
        }
    }
}