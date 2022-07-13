package com.michaelwiderin.couplemeasuring.ui.navigation

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.Home
import androidx.compose.material.icons.rounded.List
import androidx.compose.material.icons.rounded.Settings
import androidx.compose.ui.graphics.vector.ImageVector

sealed class NavItem(var icon: ImageVector, var route: String) {
    object Home : NavItem(Icons.Rounded.Home, "home")
    object MeasureList : NavItem(Icons.Rounded.List, "measure_list")
    object Settings : NavItem(Icons.Rounded.Settings, "settings")
}