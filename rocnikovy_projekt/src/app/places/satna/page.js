"use client"

import { useState } from "react"
import Nav from "@/components/Nav"
import { useGameState } from "@/components/GameStateContext"

const DIALOGUES = {
    mlady_borec: {
        speaker: "Mladý borec",
        text: "Kouzelný protein? Co to meleš? Tady se řeší jen trénink, ne nějaký pohádky. Jestli hledáš odpovědi, tak špatně."
    },

    mlady_borec_translate: {
        speaker: "Mladý borec",
        text: "Jo, počkej, hodím to do překladače... Říká to něco jako 'Musíš koupit kšiltovku na recepci'. Divný, ne?"
    },

    stary_borec: {
        speaker: "Starý borec",
        text: "[telefon] Nedávej si jako heslo svoje datum narození… to je první věc, co zkouší každej. [/telefon] Hej, neruš mě, vidíš že telefonuju. Co chceš, to si vyřeš jinde."
    },

    kalendar: {
        speaker: "Kalendář",
        text: "05.10.2025"
    }
}



export default function Home() {
    const { state, updateState } = useGameState()
    const [activeDialogue, setActiveDialogue] = useState(null)

    const openDialogue = (id) => (e) => {
        e.stopPropagation()
        setActiveDialogue(prev => prev === id ? null : id)
    }

    return (
        <div
            className="h-full w-full flex bg-[#071321] relative overflow-hidden"
            onClick={() => setActiveDialogue(null)}
        >
            <Nav backHref="/hra" />

            <div className="flex-1 flex justify-center items-center mt-[-10rem]">
                <div className="h-[40rem] w-[72rem] rounded-[2rem] ml-auto mr-6 border-blue-400 border-[0.25rem] flex justify-center items-center bg-[url('/satna_lepsi.png')] bg-center bg-cover">

                    <button
                        id="mlady_borec"
                        onClick={(e) => {
                            e.stopPropagation()
                            if (state.hasMetChineseGuy) {
                                if (!state.translated) updateState({ translated: true })
                                setActiveDialogue(prev => prev === "mlady_borec_translate" ? null : "mlady_borec_translate")
                            } else {
                                setActiveDialogue(prev => prev === "mlady_borec" ? null : "mlady_borec")
                            }
                        }}
                        className="w-20 h-45 absolute cursor-pointer bg-white opacity-0 mt-[5.5rem] ml-[22rem]"
                    />

                    <button
                        id="stary_borec"
                        onClick={openDialogue("stary_borec")}
                        className="w-50 h-60 absolute cursor-pointer bg-white opacity-0 mt-[21rem] mr-[56rem]"
                    />

                    <button
                        id="kalendar"
                        onClick={openDialogue("kalendar")}
                        className="w-17 h-25 absolute cursor-pointer bg-white opacity-0 mb-[16.5rem] mr-[35rem]"
                    />
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