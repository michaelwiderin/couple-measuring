package com.michaelwiderin.couplemeasuring.ui.composeables

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Card
import androidx.compose.material.Icon
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.Sensors
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.michaelwiderin.couplemeasuring.ui.theme.BuzzerStatePrimaryStyle
import com.michaelwiderin.couplemeasuring.ui.theme.BuzzerStateSecondaryStyle
import com.michaelwiderin.couplemeasuring.ui.theme.SecondaryTextColor
import com.michaelwiderin.couplemeasuring.ui.theme.SuccessColor

@Composable
fun Buzzer() {
    Card(
        elevation = 8.dp,
        shape = RoundedCornerShape(10.dp),
        modifier = Modifier
            .fillMaxWidth()
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween,
            modifier = Modifier.padding(10.dp)
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(20.dp)
            ) {
                Card(
                    elevation = 4.dp,
                    shape = CircleShape,
                    modifier = Modifier.size(50.dp)
                ) {
                    Icon(
                        Icons.Rounded.Sensors,
                        contentDescription = "Connection",
                        tint = SecondaryTextColor,
                        modifier = Modifier.padding(8.dp)
                    )
                }
                Column {
                    Text(
                        text = "Status:",
                        style = BuzzerStateSecondaryStyle
                    )
                    Text(
                        text = "Aktiv (Erreichbar)",
                        style = BuzzerStatePrimaryStyle
                    )
                }
            }
            Box(modifier = Modifier
                .background(
                    color = SuccessColor,
                    shape = CircleShape
                )
                .size(16.dp)
            )
        }
    }
}