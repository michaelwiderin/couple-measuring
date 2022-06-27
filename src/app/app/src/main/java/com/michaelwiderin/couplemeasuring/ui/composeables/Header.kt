package com.michaelwiderin.couplemeasuring.ui.composeables

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import com.michaelwiderin.couplemeasuring.R
import com.michaelwiderin.couplemeasuring.ui.theme.HeaderPrimaryTextStyle
import com.michaelwiderin.couplemeasuring.ui.theme.HeaderSecondaryTextStyle

@Composable
fun Header() {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(8.dp),
        modifier = Modifier
            .fillMaxWidth())
    {
        Image(
            painter = painterResource(id = R.drawable.logo),
            contentDescription = "",
            modifier = Modifier
                .size(70.dp)
                .clip(CircleShape)
        )
        Column {
            Text(
                "Wettkampf-Zeitmessung",
                style = HeaderPrimaryTextStyle
            )
            Text(
                "Feuerwehr Braz",
                style = HeaderSecondaryTextStyle
            )
        }
    }
}