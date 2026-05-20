"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

const GameStateContext = createContext(null)

export function GameStateProvider({ children }) {
    const [state, setState] = useState({
        hasEntryBanknote: false,
        hasPaidEntry: false,
        hasCapMoney: false,
        hasCap: false,
        translated: false,
        buttons: {
            recepce: false,
            cardio: false,
            restroom: false,
        },
        cardioClockRemoved: false,
        restroomBinRemoved: false,
        hasMetChineseGuy: false,
        translated: false,
        secretOpened: false,
        gameCompleted: false,
    })
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem("gameState")
        if (saved) {
            try {
                setState(JSON.parse(saved))
            } catch (e) {
                console.error("Failed to load game state", e)
            }
        }
        setIsLoaded(true)
    }, [])

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("gameState", JSON.stringify(state))

            if (state.buttons.recepce && state.buttons.cardio && state.buttons.restroom && !state.secretOpened) {
                setState(prev => ({ ...prev, secretOpened: true }))
            }
        }
    }, [state, isLoaded])

    const updateState = (updates) => {
        setState((prev) => ({ ...prev, ...updates }))
    }

    const resetState = () => {
        const newState = {
            hasEntryBanknote: false,
            hasPaidEntry: false,
            hasCapMoney: false,
            hasCap: false,
            translated: false,
            buttons: {
                recepce: false,
                cardio: false,
                restroom: false,
            },
            cardioClockRemoved: false,
            restroomBinRemoved: false,
            hasMetChineseGuy: false,
            translated: false,
            secretOpened: false,
            gameCompleted: false,
        }
        setState(newState)
        localStorage.setItem("gameState", JSON.stringify(newState))
    }

    return (
        <GameStateContext.Provider value={{ state, updateState, resetState }}>
            {children}
        </GameStateContext.Provider>
    )
}

export function useGameState() {
    return useContext(GameStateContext)
}
