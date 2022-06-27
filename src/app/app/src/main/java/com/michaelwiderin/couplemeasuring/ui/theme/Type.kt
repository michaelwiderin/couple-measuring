package com.michaelwiderin.couplemeasuring.ui.theme

import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.Font
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp
import com.michaelwiderin.couplemeasuring.R

val RobotoFontFamily = FontFamily(
    Font(R.font.roboto_thin, FontWeight.Thin),
    Font(R.font.roboto_light, FontWeight.Light),
    Font(R.font.roboto_regular, FontWeight.W400),
    Font(R.font.roboto_medium, FontWeight.Medium),
    Font(R.font.roboto_bold, FontWeight.Bold),
    Font(R.font.roboto_black, FontWeight.Black)
)

val CardHeaderTextStyle = TextStyle(
    color = SecondaryTextColor,
    fontFamily = RobotoFontFamily,
    fontWeight = FontWeight.Medium,
    fontSize = 18.sp
)

val HeaderPrimaryTextStyle = TextStyle(
    color = HeaderPrimaryTextColor,
    fontFamily = RobotoFontFamily,
    fontWeight = FontWeight.Medium,
    fontSize = 20.sp
)

val HeaderSecondaryTextStyle = TextStyle(
    color = SecondaryTextColor,
    fontFamily = RobotoFontFamily,
    fontWeight = FontWeight.Light,
    fontSize = 14.sp
)

val BuzzerStatePrimaryStyle = TextStyle(
    color = SuccessColor,
    fontFamily = RobotoFontFamily,
    fontWeight = FontWeight.Medium,
    fontSize = 16.sp
)

val BuzzerStateSecondaryStyle = TextStyle(
    color = SecondaryTextColor,
    fontFamily = RobotoFontFamily,
    fontWeight = FontWeight.Light,
    fontSize = 12.sp
)