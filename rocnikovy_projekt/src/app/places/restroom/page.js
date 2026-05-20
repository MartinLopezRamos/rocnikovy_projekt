"use client"

import { useState } from "react"
import Nav from "@/components/Nav"
import { useGameState } from "@/components/GameStateContext"

const DIALOGUES = {
    michael_olise: {
        speaker: "Michael Olise",
        text: "Protein? Nevím, co tím myslíš. Já řeším spíš regeneraci po zápase, klid a prostor kolem sebe. Tady na záchodech je to zvláštní ticho, úplně jiné než v šatně. A upřímně, tyhle zázraky v doplňcích mě nikdy nezajímaly. Pokud něco funguje, tak je to pohyb, ne nějaké legendy o kouzelných věcech."
    },

    asian_guy: {
        speaker: "Muž",
        text: "Kouzelný protein? Netuším, o čem mluvíš. Já jsem jen šel na toaletu a teď přemýšlím, proč jsou tady dva koše vedle sebe, když by úplně stačil jeden. Nedává mi to žádný smysl, jako by se někdo rozhodl věci jen zdvojit bez důvodu. Celé to místo mě nějak mate, jako by tu logika nebyla úplně důležitá."
    },

    red_button: {
        speaker: "Systém",
        text: "stisknuto"
    }
};



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
                <div
                    className={`h-[40rem] w-[72rem] rounded-[2rem] ml-auto mr-6 border-blue-400 border-[0.25rem] flex justify-center items-center bg-center bg-cover ${state.restroomBinRemoved
                        ? "bg-[url('/restroom_changed.png')]"
                        : "bg-[url('/restroom.png')]"
                        }`}
                >
                    <button
                        id="michael_olise"
                        onClick={openDialogue("michael_olise")}
                        className="w-31 h-85 absolute cursor-pointer bg-white opacity-0 mt-[6rem] ml-[25.1rem]"
                    />

                    <button
                        id="asian_guy"
                        onClick={openDialogue("asian_guy")}
                        className="w-50 h-90 absolute cursor-pointer bg-white opacity-0 mt-[13rem] mr-[44.5rem]"
                    />

                    {!state.restroomBinRemoved && (
                        <button
                            id="recycle_bin"
                            onClick={(e) => {
                                e.stopPropagation()
                                updateState({ restroomBinRemoved: true })
                            }}
                            className="w-25 h-45 absolute cursor-pointer bg-white opacity-0 mt-[24.6rem] ml-[49.2rem]"
                        />
                    )}

                    {state.restroomBinRemoved && !state.buttons.restroom && (
                        <button
                            id="red_button"
                            onClick={(e) => {
                                e.stopPropagation()
                                updateState({ buttons: { ...state.buttons, restroom: true } })
                                setActiveDialogue("red_button")
                            }}
                            className="w-8 h-13 absolute cursor-pointer bg-white opacity-0 mt-[26.9rem] ml-[57.4rem]"
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