"use client"

import { useState } from "react"
import Nav from "@/components/Nav"
import { useGameState } from "@/components/GameStateContext"

const DIALOGUES = {
    cernoska: {
        speaker: "Žena",
        text: "Kouzelný protein? Netuším, o čem mluvíš. Lidi často hledají věci, které jim dají rychlé odpovědi, ale většina věcí takhle nefunguje. Já spíš sleduju okolí, jak se mění světlo během dne, jak se město chová jinak ráno a jinak večer. Všechno má svůj rytmus, jen ho musíš vnímat."
    },

    muslimka: {
        speaker: "Žena",
        text: "Protein? To slyším poprvé, vůbec nevím, co tím myslíš. Já se spíš zaměřuju na klid v běžných dnech, na to, jak se lidé pohybují mezi svými povinnostmi a jak si málokdy dovolí zastavit. Je zajímavé sledovat, jak každý žije ve svém tempu, i když sdílíme stejný prostor."
    },

    trenerka: {
        speaker: "Trenérka",
        text: "Kouzelný protein neznám a nedává mi to smysl. V životě stejně nic nefunguje bez práce a opakování. Každý den vidím lidi, co chtějí rychlé výsledky, ale realita je spíš o tom vydržet, i když to nejde podle plánu. Adaptace je důležitější než dokonalost."
    },

    stary_muz: {
        speaker: "Starý muž",
        text: "Protein? To je nějaká nová věc, o které nemám ani ponětí. Dřív jsme podobné věci neřešili, prostě se žilo a hotovo. Teď mám víc času přemýšlet o tom, jak se všechno změnilo, i když podstata zůstala stejná. Lidi pořád řeší to samé, jen jinými slovy."
    }
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
        if (state.hasCapMoney) {
            return "bg-[url('/skupinova_lekce.png')]"
        }

        return "bg-[url('/skupinova_lekce_penize.png')]"
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
                    <button
                        id="cernoska"
                        onClick={openDialogue("cernoska")}
                        className="w-25 h-45 absolute cursor-pointer bg-white opacity-0 mt-[6rem] ml-[18rem]"
                    />

                    <button
                        id="muslimka"
                        onClick={openDialogue("muslimka")}
                        className="w-35 h-80 absolute cursor-pointer bg-white opacity-0 mt-[17.5rem] mr-[33rem]"
                    />

                    <button
                        id="trenerka"
                        onClick={openDialogue("trenerka")}
                        className="w-31 h-75 absolute cursor-pointer bg-white opacity-0 mt-[7.2rem] ml-[43.2rem]"
                    />

                    <button
                        id="stary_muz"
                        onClick={openDialogue("stary_muz")}
                        className="w-30 h-50 absolute cursor-pointer bg-white opacity-0 mt-[6rem] mr-[10.5rem]"
                    />

                    {!state.hasCapMoney && (
                        <button
                            id="bankovka"
                            onClick={(e) => {
                                e.stopPropagation()
                                updateState({ hasCapMoney: true })
                                setBolekMessage("Našel jsi nějaké peníze na zemi! Možná se budou někde hodit.")
                            }}
                            className="w-15 h-7 absolute cursor-pointer bg-white opacity-0 mt-[35.7rem] ml-[52rem]"
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