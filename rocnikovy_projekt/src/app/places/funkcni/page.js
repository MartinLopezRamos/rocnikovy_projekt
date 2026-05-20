"use client"

import { useState } from "react"
import Nav from "@/components/Nav"
import Link from "next/link"
import { useGameState } from "@/components/GameStateContext"

const DIALOGUES = {
    borec_deadlift: {
        speaker: "Borec",
        text: "Tady na tomhle místě jsem strávil roky. Deadlift mi ukázal, že síla není stabilní věc, buď ji držíš, nebo tě rozdrtí. A ne, žádnej kouzelnej protein neznám, řešíš blbosti."
    },

    holka_shyby: {
        speaker: "Holka",
        text: "Začínala jsem tak, že jsem nedala ani jeden shyb. Teď jich dám tolik, kolik si dovolím. A ten protein, co zmiňuješ… to zní jak nějaká reklama, co jsem nikdy neviděla."
    },

    cernoska: {
        speaker: "Žena",
        text: "Neřeším věci, co nemají základ v realitě. Trénuju, protože vím proč. A kouzelný protein? To slyším poprvé, vůbec nevím, o čem mluvíš."
    },

    borec_kettlebell: {
        speaker: "Borec",
        text: "Kettlebell mě naučil, že chaos se dá řídit, když ho nepouštíš z ruky. Žádný zkratky, žádný pohádky o proteinech, to sem nepatří."
    }
};

export default function Home() {
    const { state } = useGameState()
    const [activeDialogue, setActiveDialogue] = useState(null)
    const [bolekMessage, setBolekMessage] = useState(null)

    const openDialogue = (id) => (e) => {
        e.stopPropagation()
        setActiveDialogue(prev => prev === id ? null : id)
    }

    return (
        <div
            className="h-full w-full flex bg-[#071321] relative overflow-hidden"
            onClick={() => setActiveDialogue(null)}
        >
            <Nav bolekText={bolekMessage} defaultBolekOpen={!!bolekMessage} onBolekClose={() => setBolekMessage(null)} backHref="/hra" />

            <div className="flex-1 flex justify-center items-center mt-[-10rem]">
                <div className={`h-[40rem] w-[72rem] rounded-[2rem] ml-auto mr-6 border-blue-400 border-[0.25rem] flex justify-center items-center bg-center bg-cover ${state.secretOpened ? "bg-[url('/funkcni_trenink_dvere.png')]" : "bg-[url('/funkcni_trenink.png')]"}`}>

                    <button
                        id="borec_deadlift"
                        onClick={openDialogue("borec_deadlift")}
                        className="w-29 h-45 absolute cursor-pointer bg-white opacity-0 mt-[5.5rem] ml-[20.5rem]"
                    />

                    <button
                        id="holka_shyby"
                        onClick={openDialogue("holka_shyby")}
                        className="w-35 h-90 absolute cursor-pointer bg-white opacity-0 mt-[2rem] mr-[56rem]"
                    />

                    <button
                        id="cernoska"
                        onClick={openDialogue("cernoska")}
                        className="w-34 h-45 absolute cursor-pointer bg-white opacity-0 mt-[10rem] ml-[62rem]"
                    />

                    <button
                        id="borec_kettlebell"
                        onClick={openDialogue("borec_kettlebell")}
                        className="w-30 h-70 absolute cursor-pointer bg-white opacity-0 mt-[12rem] mr-[15rem]"
                    />

                    {state.secretOpened && (
                        <Link
                            href="/places/secret"
                            id="dvere"
                            className="w-25 h-37 absolute cursor-pointer bg-white opacity-0 mb-[7.4rem] ml-[2.5rem]"
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