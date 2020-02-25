package com.silvio

import io.micronaut.websocket.WebSocketBroadcaster
import io.micronaut.websocket.WebSocketSession
import io.micronaut.websocket.annotation.OnMessage
import io.micronaut.websocket.annotation.OnOpen
import io.micronaut.websocket.annotation.ServerWebSocket
import javax.inject.Inject


@ServerWebSocket("/chat")
class ChatServerSocket @Inject constructor(
        private val broadcaster: WebSocketBroadcaster
) {

    @OnOpen
    fun onOpen(session: WebSocketSession) {
        val message = "User ${session.id} joined in!"
        println(message)
        broadcaster.broadcastSync(message)
    }

    @OnMessage
    fun onMessage(message: String, session: WebSocketSession) {
        println("Received message $message \n")
        broadcaster.broadcastSync(message)
    }
}