"use client"

import { useState } from "react"
import Nav from "@/components/Nav"

const DIALOGUES = {
    cardio_girl_black: {
        speaker: "Černoška",
        text: "Kouzelný protein? O ničem takovém nevím. Nekoukej tak, soustřeď se na sebe a neruš ostatní v cardio zóně."
    },

    cardio_guy_black: {
        speaker: "Černoch",
        text: "Protein? Netuším, o čem mluvíš kemo. Zdar, drž rytmus a neřeš okolí, důležitý je konstantní výkon."
    },

    cardio_guy_asian: {
        speaker: "Číňan",
        text: "Ràng shēntǐ dài nǐ zǒu, bùyào kàn shùzì, bǎ hūxī fàng qīngsōng yīdiǎn, ràng jiézòu zìrán chíxù xiàqù."
    },

    cardio_holka: {
        speaker: "Holka",
        text: "Protein? To slyším poprvé, nevím, o čem mluvíš. Zvykej si na nepohodlí, cardio funguje jen když nepovolíš tlak."
    },

    cardio_old_guy: {
        speaker: "Starý muž",
        text: "Kouzelný protein neznám a nezajímá mě. Neotravuj! Běž dál. Tohle tělo už dávno není to, co bývalo."
    },

    cardio_holka_2: {
        speaker: "Žena",
        text: "O žádném proteinu nic nevím a nechápu, proč to řešíš. A taky nechápu, proč tady v posilovně už roky visí rozbité hodiny, co pořád nefungují."
    },

    red_button: {
        speaker: "Systém",
        text: "stisknuto"
    },
};

export default function Home() {
    const [activeDialogue, setActiveDialogue] = useState(null)
    const [changed, setChanged] = useState(false)

    const openDialogue = (id) => (e) => {
        e.stopPropagation()
        setActiveDialogue(prev => prev === id ? null : id)
    }

    const handleClick = (e) => {
        e.stopPropagation()
        setChanged(true)
    }

    return (
        <div
            className="h-full w-full flex bg-[#071321] relative overflow-hidden"
            onClick={() => setActiveDialogue(null)}
        >
            <Nav backHref="/hra" />

            <div className="flex-1 flex justify-center items-center mt-[-10rem]">
                <div
                    className={`h-[40rem] w-[72rem] rounded-[2rem] ml-auto mr-6 border-blue-400 border-[0.25rem] flex justify-center items-center bg-center bg-cover ${changed
                            ? "bg-[url('/cardio_lepsi_button.png')]"
                            : "bg-[url('/cardio_lepsi.png')]"
                        }`}
                >
                    {/* characters */}
                    <button
                        id="cardio_girl_black"
                        onClick={openDialogue("cardio_girl_black")}
                        className="w-21 h-40 absolute cursor-pointer bg-white opacity-0 mb-[2rem] ml-[41rem]"
                    />

                    <button
                        id="cardio_guy_black"
                        onClick={openDialogue("cardio_guy_black")}
                        className="w-32 h-50 absolute cursor-pointer bg-white opacity-0 mb-[1rem] ml-[58rem]"
                    />

                    <button
                        id="cardio_guy_asian"
                        onClick={openDialogue("cardio_guy_asian")}
                        className="w-19 h-35 absolute cursor-pointer bg-white opacity-0 mb-[6rem] ml-[27rem]"
                    />

                    <button
                        id="cardio_holka"
                        onClick={openDialogue("cardio_holka")}
                        className="w-19 h-40 absolute cursor-pointer bg-white opacity-0 mb-[3rem] mr-[33rem]"
                    />

                    <button
                        id="cardio_old_guy"
                        onClick={openDialogue("cardio_old_guy")}
                        className="w-30 h-50 absolute cursor-pointer bg-white opacity-0 mb-[3rem] mr-[48rem]"
                    />

                    <button
                        id="cardio_holka_2"
                        onClick={openDialogue("cardio_holka_2")}
                        className="w-14 h-35 absolute cursor-pointer bg-white opacity-0 mb-[4.3rem] mr-[23rem]"
                    />

                    {/* hodiny */}
                    {!changed && (
                        <button
                            id="hodiny"
                            onClick={handleClick}
                            className="w-17 h-23 absolute cursor-pointer bg-white opacity-0 mb-[27.2rem] ml-[63.5rem]"
                        />
                    )}

                    {/* red button */}
                    {changed && (
                        <button
                            id="red_button"
                            onClick={openDialogue("red_button")}
                            className="w-12 h-15 absolute cursor-pointer bg-white opacity-0 mb-[27.4rem] ml-[65.1rem]"
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