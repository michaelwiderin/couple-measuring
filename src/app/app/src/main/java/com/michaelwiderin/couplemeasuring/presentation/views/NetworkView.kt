package com.michaelwiderin.couplemeasuring.presentation.views

import android.widget.Button
import androidx.compose.foundation.background
import androidx.compose.foundation.interaction.InteractionSource
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.material.ButtonDefaults.elevation
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.michaelwiderin.couplemeasuring.presentation.states.NetworkState
import com.michaelwiderin.couplemeasuring.presentation.viewModels.NetworkViewModel
import com.michaelwiderin.couplemeasuring.ui.theme.*

@Composable
fun NetworkView(viewModel: NetworkViewModel) {
    val state = viewModel.state.collectAsState().value
    Column(
        verticalArrangement = Arrangement.SpaceBetween,
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier
            .padding(16.dp)
            .fillMaxSize()
    ) {
        Box() { }
        Column(
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            CircularProgressIndicator(
                strokeWidth = 6.dp,
                color = HeaderPrimaryTextColor,
                modifier = Modifier
                    .padding(24.dp)
                    .size(80.dp)
            )
            when(state) {
                is NetworkState.Loading -> {
                    Text(
                        text = state.message,
                        style = HeaderSecondaryTextStyle
                    )
                }
                is NetworkState.IsConnected -> {

                }

                is NetworkState.Error -> {

                }
                else -> throw IllegalStateException()
            }
        }
        Button(
            colors = ButtonDefaults.buttonColors(backgroundColor = Color.Transparent),
            elevation = elevation(defaultElevation = 0.dp, pressedElevation = 0.dp),
            modifier = Modifier.fillMaxWidth(),
            onClick = { viewModel.continueWithLocalMode() }
        ) {
            Text(
                "Zeitmessung ohne Buzzer starten",
                style = HeaderSecondaryTextStyle
            )
        }
    }
}