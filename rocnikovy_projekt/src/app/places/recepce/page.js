"use client"

import { useState } from "react"
import Nav from "@/components/Nav"
import { useGameState } from "@/components/GameStateContext"

const DIALOGUES = {
    recepce_guy: { speaker: "Recepční muž", text: "Dobrý den, pro vstup do posilovny musíte zaplatit." },
    recepce_girl: { speaker: "Recepční dívka", text: "Dobrý den, abyste mohl vstoupit do posilovny, musíte zaplatit." },
    recepce_guy_paid: { speaker: "Recepční muž", text: "Díky za platbu! Užijte si trénink, můžete jít dál." },
    recepce_girl_paid: { speaker: "Recepční dívka", text: "Platba proběhla v pořádku. Skříňky jsou volné, běžte cvičit!" },
    red_button: { speaker: "Tlačítko", text: "stisknuto" },
}

export default function Home() {
    const { state, updateState } = useGameState()
    const [activeDialogue, setActiveDialogue] = useState(null)
    const [bolekMessage, setBolekMessage] = useState(null)

    const openDialogue = (id) => (e) => {
        e.stopPropagation()
        setActiveDialogue(prev => prev === id ? null : id)
    }

    const currentBackground = () => {
        if (state.buttons.recepce || state.hasCap) {
            return "bg-[url('/no_money_narozky_button.png')]"
        }

        if (!state.hasEntryBanknote) {
            return "bg-[url('/money_narozky.png')]"
        }

        return "bg-[url('/no_money_narozky.png')]"
    }

    return (
        <div
            className="h-full w-full flex bg-[#071321] relative overflow-hidden"
            onClick={() => setActiveDialogue(null)}
        >
            <Nav bolekText={bolekMessage} defaultBolekOpen={!!bolekMessage} onBolekClose={() => setBolekMessage(null)} backHref="/hra" />

            <div className="flex-1 flex justify-center items-center mt-[-10rem]">
                <div
                    className={`h-[40rem] w-[72rem] rounded-[2rem] ml-auto mr-6 border-blue-400 border-[0.25rem] flex justify-center items-center bg-center bg-cover ${currentBackground()}`}
                >
                    {!state.hasEntryBanknote && (
                        <button
                            id="bankovka"
                            onClick={(e) => {
                                e.stopPropagation()
                                updateState({ hasEntryBanknote: true })
                            }}
                            className="w-21 h-10 absolute cursor-pointer opacity-0 mt-[18.9rem] mr-[44.7rem]"
                        />
                    )}

                    <button
                        id="recepce_guy"
                        onClick={(e) => {
                            e.stopPropagation()
                            if (state.hasEntryBanknote && !state.hasPaidEntry) {
                                updateState({ hasPaidEntry: true })
                                setBolekMessage("Paráda, zaplatil jsi vstup. Můžeme jít prohledat zbytek posilovny!")
                            } else if (state.hasPaidEntry) {
                                setActiveDialogue(prev => prev === "recepce_guy_paid" ? null : "recepce_guy_paid")
                            } else {
                                setActiveDialogue(prev => prev === "recepce_guy" ? null : "recepce_guy")
                            }
                        }}
                        className="w-32 h-50 absolute cursor-pointer opacity-0 mb-[5.5rem] ml-[8.5rem]"
                    />

                    <button
                        id="recepce_girl"
                        onClick={(e) => {
                            e.stopPropagation()
                            if (state.hasEntryBanknote && !state.hasPaidEntry) {
                                updateState({ hasPaidEntry: true })
                                setBolekMessage("Paráda, zaplatil jsi vstup. Můžeme jít prohledat zbytek posilovny!")
                            } else if (state.hasPaidEntry) {
                                setActiveDialogue(prev => prev === "recepce_girl_paid" ? null : "recepce_girl_paid")
                            } else {
                                setActiveDialogue(prev => prev === "recepce_girl" ? null : "recepce_girl")
                            }
                        }}
                        className="w-28 h-48 absolute cursor-pointer opacity-0 mb-[0rem] ml-[32rem]"
                    />

                    {state.translated && !state.hasCap && (
                        <button
                            id="cepice"
                            onClick={(e) => {
                                e.stopPropagation()
                                if (state.hasCapMoney) {
                                    updateState({ hasCap: true })
                                    setBolekMessage("Koupil jsi kšiltovku! Podívej, pod ní něco bylo.")
                                } else {
                                    setBolekMessage("Na to nemáš peníze! Musíš někde najít další.")
                                }
                            }}
                            className="w-17 h-17 absolute cursor-pointer opacity-0 mt-[5rem] ml-[67rem]"
                        />
                    )}

                    {state.hasCap && !state.buttons.recepce && (
                        <button
                            id="red_button"
                            onClick={(e) => {
                                e.stopPropagation()
                                updateState({ buttons: { ...state.buttons, recepce: true } })
                                setActiveDialogue("red_button")
                            }}
                            className="w-13 h-13 absolute cursor-pointer opacity-0 mt-[6rem] ml-[68rem]"
                        />
                    )}
                </div>
            </div>

            {activeDialogue && DIALOGUES[activeDialogue] && (
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute left-1/2 -translate-x-1/2 bottom-[3rem] w-[72rem] h-[13rem] rounded-[1.5rem] bg-[#071321] border-blue-400 border-[0.25rem] flex flex-col justify-center ml-30 mr-6"
                >
                    <h2 className="text-blue-400 text-[1.25rem] font-bold ml-4">
                        {DIALOGUES[activeDialogue].speaker}
                    </h2>

                    <p className="text-blue-400 text-[1.4rem] ml-4 mt-1 leading-tight w-[64rem]">
                        {DIALOGUES[activeDialogue].text}
                    </p>
                </div>
            )}
        </div>
    )
}
