"use client"

import { useState } from "react"
import Nav from "@/components/Nav"

const DIALOGUES = {
    cardio_holka: {
        speaker: "Svalovec",
        text: "Hele, co tady řešíš? Kouzelný protein? Zvedám tady těžký váhy a ty sem přijdeš s tímhle? Soustřeď se na něco normálního nebo aspoň neruš lidi co makaj."
    },

    cardio_old_guy: {
        speaker: "Starý muž",
        text: "Kouzelný co? Já tady tahám železo a ty mi tu mluvíš o pohádkách. V tomhle věku už nevěřím ničemu navíc, jen práci a bolesti po tréninku. Takže běž si řešit svoje věci a nech mě dřepovat v klidu."
    },

    cardio_holka_2: {
        speaker: "Holka",
        text: "Co to vůbec říkáš? Tady se maká, ne řeší blbosti. Jestli hledáš nějaký kouzla, tak jsi na špatném místě, tady jsou jen činky a pot. Tak se vrať zpátky a neruš."
    }
};

export default function Home() {
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
                <div className="h-[40rem] w-[72rem] rounded-[2rem] ml-auto mr-6 border-blue-400 border-[0.25rem] flex justify-center items-center bg-[url('/volne_vahy.png')] bg-center bg-cover">

                    <button
                        id="cardio_holka"
                        onClick={openDialogue("cardio_holka")}
                        className="w-40 h-40 absolute cursor-pointer bg-white opacity-0 mt-[13rem] ml-[48rem]"
                    />

                    <button
                        id="cardio_old_guy"
                        onClick={openDialogue("cardio_old_guy")}
                        className="w-30 h-70 absolute cursor-pointer bg-white opacity-0 mt-[15rem] mr-[28rem]"
                    />

                    <button
                        id="cardio_holka_2"
                        onClick={openDialogue("cardio_holka_2")}
                        className="w-17 h-35 absolute cursor-pointer bg-white opacity-0 mb-[4.3rem] mr-[13rem]"
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