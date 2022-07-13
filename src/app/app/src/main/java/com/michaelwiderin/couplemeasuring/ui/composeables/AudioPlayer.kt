package com.michaelwiderin.couplemeasuring.ui.composeables

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Card
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.Icon
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.PlayArrow
import androidx.compose.material.icons.rounded.Stop
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.michaelwiderin.couplemeasuring.toDisplayTime
import com.michaelwiderin.couplemeasuring.presentation.viewModels.PlayerViewModel
import com.michaelwiderin.couplemeasuring.ui.theme.AudioPlayerFileLengthStyle
import com.michaelwiderin.couplemeasuring.ui.theme.AudioPlayerHeaderStyle
import com.michaelwiderin.couplemeasuring.ui.theme.SecondaryTextColor

@ExperimentalMaterialApi
@Composable
fun AudioPlayer(viewModel: PlayerViewModel) {
    val state = viewModel.stateFlow.collectAsState()

    Card(
        elevation = 8.dp,
        shape = RoundedCornerShape(10.dp),
        modifier = Modifier.fillMaxWidth()
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween,
            modifier = Modifier
                .padding(10.dp)
                .fillMaxWidth()
        ) {
            Card(
                elevation = 4.dp,
                shape = CircleShape,
                modifier = Modifier.size(40.dp),
                onClick = { viewModel.handlePlayerClick() }
            ) {
                val icon = if (state.value.isRunning) Icons.Rounded.Stop else Icons.Rounded.PlayArrow

                Icon(
                    icon,
                    contentDescription = "Audio control",
                    tint = SecondaryTextColor,
                    modifier = Modifier.padding(8.dp)
                )
            }
            Text(
                text = "Angriffsbefehl",
                style = AudioPlayerHeaderStyle
            )
            Text(
                text = "${state.value.currentPosition.toDisplayTime()} / ${state.value.totalDuration.toDisplayTime()}",
                style = AudioPlayerFileLengthStyle
            )
        }
    }
}