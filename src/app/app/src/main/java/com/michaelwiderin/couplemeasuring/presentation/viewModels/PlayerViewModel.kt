package com.michaelwiderin.couplemeasuring.presentation.viewModels

import android.content.Context
import android.media.MediaPlayer
import android.os.CountDownTimer
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.michaelwiderin.couplemeasuring.R
import com.michaelwiderin.couplemeasuring.presentation.states.PlayerState
import dagger.hilt.android.lifecycle.HiltViewModel
import dagger.hilt.android.qualifiers.ApplicationContext
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class PlayerViewModel @Inject constructor(
    @ApplicationContext context: Context
) : ViewModel() {

    private val _stateFlow = MutableStateFlow(PlayerState())
    val stateFlow = _stateFlow.asStateFlow()

    private val mediaPlayer = MediaPlayer().apply {
        setOnPreparedListener { handleOnPrepared() }
        setOnCompletionListener { handleOnCompleted() }
        setScreenOnWhilePlaying(true)
    }

    private val assetFileDescriptor = context.resources.openRawResourceFd(R.raw.angriffsbefehl)

    init {
        mediaPlayer.run {
            setDataSource(
                assetFileDescriptor.fileDescriptor,
                assetFileDescriptor.startOffset,
                assetFileDescriptor.declaredLength
            )
            prepareAsync()
        }
    }

    fun handlePlayerClick() {
        val isRunning = _stateFlow.value.isRunning
        if (isRunning) {
            val newState = _stateFlow.value.copy(isRunning = false)
            _stateFlow.value = newState

            return mediaPlayer.run {
                stop()
                reset()
            }
        }

        val newState = _stateFlow.value.copy(isRunning = true)
        _stateFlow.value = newState

        return mediaPlayer.run {
            start()
        }
    }

    private fun handleOnPrepared() {
        val newState = _stateFlow.value.copy(totalDuration = mediaPlayer.duration)
        _stateFlow.value = newState

        println("PlayerViewModel: Prepared")
    }

    private fun handleOnCompleted() {
        val newState = _stateFlow.value.copy(isRunning = false)
        _stateFlow.value = newState

        println("PlayerViewModel: completed")
    }
}