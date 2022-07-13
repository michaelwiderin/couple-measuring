package com.michaelwiderin.couplemeasuring.presentation.views

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.hilt.navigation.compose.hiltViewModel
import com.michaelwiderin.couplemeasuring.presentation.viewModels.PlayerViewModel
import com.michaelwiderin.couplemeasuring.ui.composeables.AudioPlayer
import com.michaelwiderin.couplemeasuring.ui.composeables.Buzzer
import com.michaelwiderin.couplemeasuring.ui.composeables.base.BaseCardComposable
import com.michaelwiderin.couplemeasuring.ui.theme.PrimaryBackgroundColor

@ExperimentalMaterialApi
@Composable
fun MainView() {
    Box(
        modifier = Modifier
            .background(PrimaryBackgroundColor)
            .padding(12.dp)
            .fillMaxSize()
    )
    {
        Column {
            BaseCardComposable(title = "Chip") {
                Buzzer()
            }
            BaseCardComposable(title = "Zeitmessung") {
                val viewModel = hiltViewModel<PlayerViewModel>()
                AudioPlayer(viewModel)
            }
        }
    }
}