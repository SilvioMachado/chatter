package com.silvio

import io.micronaut.runtime.Micronaut

object Application {

    @JvmStatic
    fun main(args: Array<String>) {
        Micronaut.build()
                .packages("com.silvio")
                .mainClass(Application.javaClass)
                .start()
    }
}