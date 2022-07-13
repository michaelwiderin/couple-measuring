package com.michaelwiderin.couplemeasuring.ui.navigation

import androidx.compose.foundation.background
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.BottomNavigation
import androidx.compose.material.BottomNavigationItem
import androidx.compose.material.Icon
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import androidx.navigation.compose.currentBackStackEntryAsState
import com.michaelwiderin.couplemeasuring.ui.theme.PrimaryBackgroundColor
import com.michaelwiderin.couplemeasuring.ui.theme.SecondaryTextColor

@Composable
fun NavFooter(navController: NavController) {
    val items = listOf(
        NavItem.MeasureList,
        NavItem.Home,
        NavItem.Settings
    )

    BottomNavigation(
        backgroundColor = PrimaryBackgroundColor,
        contentColor = SecondaryTextColor
    ) {
        val navBackStackEntry by navController.currentBackStackEntryAsState()
        val currentRoute = navBackStackEntry?.destination?.route
        items.forEach { item ->
            BottomNavigationItem(
                icon = { Icon(imageVector = item.icon, contentDescription = "Icon") },
                selected = currentRoute == item.route,
                onClick = {
                    navController.navigate(item.route) {
                        navController.graph.startDestinationRoute?.let { route -> {
                            popUpTo(route) {
                                saveState = true
                            }
                        }}

                        launchSingleTop = true
                        restoreState = true
                    }
                }
            )
        }
    }
}