"use client"

import { useState } from "react"
import Nav from "@/components/Nav"

const DIALOGUES = {
    recepce_guy: { speaker: "Recepční můž", text: "Dobrý den, jak Vám mohu pomoci?" },
    recepce_girl: { speaker: "Recepční dívka", text: "Dobrý den, můžu Vám pomoct?" },
    red_button: { speaker: "Tlačítko", text: "stisknuto" },
}

export default function Home() {
    const [hasMoney, setHasMoney] = useState(true)
    const [hasHat, setHasHat] = useState(false)
    const [showRedButton, setShowRedButton] = useState(false)
    const [activeDialogue, setActiveDialogue] = useState(null)

    const openDialogue = (id) => (e) => {
        e.stopPropagation()
        setActiveDialogue(prev => prev === id ? null : id)
    }

    const currentBackground = () => {
        if (showRedButton) {
            return "bg-[url('/no_money_narozky_button.png')]"
        }

        if (hasMoney) {
            return "bg-[url('/money_narozky.png')]"
        }

        return "bg-[url('/no_money_narozky.png')]"
    }

    return (
        <div
            className="h-full w-full flex bg-[#071321] relative overflow-hidden"
            onClick={() => setActiveDialogue(null)}
        >
            <Nav backHref="/hra" />

            <div className="flex-1 flex justify-center items-center mt-[-10rem]">
                <div
                    className={`h-[40rem] w-[72rem] rounded-[2rem] ml-auto mr-6 border-blue-400 border-[0.25rem] flex justify-center items-center bg-center bg-cover ${currentBackground()}`}
                >
                    {/* bankovka */}
                    {hasMoney && (
                        <button
                            id="bankovka"
                            onClick={(e) => {
                                e.stopPropagation()
                                setHasMoney(false)
                                setHasHat(true)
                            }}
                            className="w-21 h-10 absolute cursor-pointer opacity-0 mt-[18.9rem] mr-[44.7rem]"
                        />
                    )}

                    {/* recepce guy */}
                    <button
                        id="recepce_guy"
                        onClick={openDialogue("recepce_guy")}
                        className="w-32 h-50 absolute cursor-pointer opacity-0 mb-[5.5rem] ml-[8.5rem]"
                    />

                    {/* recepce girl */}
                    <button
                        id="recepce_girl"
                        onClick={openDialogue("recepce_girl")}
                        className="w-28 h-48 absolute cursor-pointer opacity-0 mb-[0rem] ml-[32rem]"
                    />

                    {/* cepice */}
                    {hasHat && !showRedButton && (
                        <button
                            id="cepice"
                            onClick={(e) => {
                                e.stopPropagation()
                                setHasHat(false)
                                setShowRedButton(true)
                            }}
                            className="w-17 h-17 absolute cursor-pointer opacity-0 mt-[5rem] ml-[67rem]"
                        />
                    )}

                    {/* red button */}
                    {showRedButton && (
                        <button
                            id="red_button"
                            onClick={openDialogue("red_button")}
                            className="w-13 h-13 absolute cursor-pointer opacity-0 mt-[6rem] ml-[68rem]"
                        />
                    )}
                </div>
            </div>

            {/* dialogue */}
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