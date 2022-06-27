package com.michaelwiderin.couplemeasuring.ui.composeables.base

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.michaelwiderin.couplemeasuring.ui.theme.CardHeaderTextStyle

@Composable
fun BaseCardComposable(
    title: String,
    comp: @Composable() () -> Unit
) {
    Column(
        verticalArrangement = Arrangement.spacedBy(8.dp),
        modifier = Modifier
            .padding(12.dp)
    ) {
        Text(
            text = title,
            style = CardHeaderTextStyle
        )
        comp()
    }
}