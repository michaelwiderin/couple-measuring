package com.michaelwiderin.couplemeasuring.di

import com.michaelwiderin.couplemeasuring.core.services.WebSocketService
import com.michaelwiderin.couplemeasuring.data.services.IWebSocketService
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object AppModule {



    @Provides
    @Singleton
    fun provideWebSocketService(baseUrl: String) : IWebSocketService {
        return WebSocketService()
    }

}