package com.michaelwiderin.couplemeasuring.ui.views

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.michaelwiderin.couplemeasuring.ui.composeables.AudioPlayer
import com.michaelwiderin.couplemeasuring.ui.composeables.Buzzer
import com.michaelwiderin.couplemeasuring.ui.composeables.Header
import com.michaelwiderin.couplemeasuring.ui.composeables.base.BaseCardComposable
import com.michaelwiderin.couplemeasuring.ui.theme.PrimaryBackgroundColor

@Composable
fun MainView() {
    Box(modifier = Modifier
        .background(PrimaryBackgroundColor)
        .padding(12.dp)
        .fillMaxSize())
    {
        Column {
            Header()
            BaseCardComposable(title = "Chip") {
                Buzzer()
            }
            BaseCardComposable(title = "Zeitmessung") {
                AudioPlayer()
            }
        }
    }
}