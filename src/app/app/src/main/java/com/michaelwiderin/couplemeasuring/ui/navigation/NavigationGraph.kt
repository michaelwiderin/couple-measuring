package com.michaelwiderin.couplemeasuring.ui.navigation

import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.runtime.Composable
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.michaelwiderin.couplemeasuring.presentation.viewModels.PlayerViewModel
import com.michaelwiderin.couplemeasuring.presentation.views.MainView
import com.michaelwiderin.couplemeasuring.presentation.views.MeasureListView
import com.michaelwiderin.couplemeasuring.presentation.views.SettingsView

@ExperimentalMaterialApi
@Composable
fun NavigationGraph(navController: NavHostController) {
    NavHost(
        navController = navController,
        startDestination = NavItem.Home.route
    ) {
        composable(NavItem.Home.route) {
            MainView()
        }
        composable(NavItem.MeasureList.route) {
            MeasureListView()
        }
        composable(NavItem.Settings.route) {
            SettingsView()
        }
    }
}