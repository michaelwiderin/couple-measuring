package com.michaelwiderin.couplemeasuring

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.Scaffold
import androidx.compose.runtime.collectAsState
import androidx.hilt.navigation.compose.hiltViewModel
import androidx.navigation.compose.rememberNavController
import com.michaelwiderin.couplemeasuring.presentation.states.NetworkState
import com.michaelwiderin.couplemeasuring.presentation.viewModels.NetworkViewModel
import com.michaelwiderin.couplemeasuring.presentation.views.NetworkView
import com.michaelwiderin.couplemeasuring.ui.composeables.Header
import com.michaelwiderin.couplemeasuring.ui.navigation.NavFooter
import com.michaelwiderin.couplemeasuring.ui.navigation.NavigationGraph
import dagger.hilt.android.AndroidEntryPoint

@ExperimentalMaterialApi
@AndroidEntryPoint
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {

            val networkViewModel = hiltViewModel<NetworkViewModel>()
            val state = networkViewModel.state.collectAsState().value

            when(state) {
                is NetworkState.Loading -> NetworkView(viewModel = networkViewModel)
                is NetworkState.IsConnected -> {
                    val navController = rememberNavController()
                    Scaffold(
                        topBar = {
                            Header()
                        },
                        bottomBar = {
                            NavFooter(navController = navController)
                        }
                    ) {
                        NavigationGraph(navController = navController)
                    }
                }
                else -> throw IllegalStateException()
            }
        }
    }
}