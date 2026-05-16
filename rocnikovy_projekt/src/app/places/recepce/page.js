"use client"

import { useState } from "react"
import Nav from "@/components/Nav"

export default function Home() {
    const [hasMoney, setHasMoney] = useState(true)
    const [showDialogue, setShowDialogue] = useState(false)

    const toggleDialogue = (e) => {
        e.stopPropagation()
        setShowDialogue((prev) => !prev)
    }

    return (
        <div
            className="h-full w-full flex bg-[#071321] relative overflow-hidden"
            onClick={() => setShowDialogue(false)}
        >
            <Nav backHref="/hra" />

            <div className="flex-1 flex justify-center items-center mt-[-10rem]">
                <div
                    className={`h-[40rem] w-[72rem] rounded-[2rem] ml-auto mr-6 border-blue-400 border-[0.25rem] flex justify-center items-center bg-center bg-cover ${hasMoney
                            ? "bg-[url('/money_narozky.png')]"
                            : "bg-[url('/no_money_narozky.png')]"
                        }`}
                >
                    {/* bankovka */}
                    {hasMoney && (
                        <button
                            id="bankovka"
                            onClick={(e) => {
                                e.stopPropagation()
                                setHasMoney(false)
                            }}
                            className="w-21 h-10 absolute cursor-pointer opacity-0 mt-[18.9rem] mr-[44.7rem]"
                        />
                    )}

                    {/* recepce guy */}
                    <button
                        id="recepce_guy"
                        onClick={toggleDialogue}
                        className="w-32 h-50 absolute cursor-pointer opacity-0 mb-[5.5rem] ml-[8.5rem]"
                    />

                    {/* recepce girl */}
                    <button
                        id="recepce_girl"
                        onClick={toggleDialogue}
                        className="w-28 h-48 absolute cursor-pointer opacity-0 mb-[0rem] ml-[32rem]"
                    />
                </div>
            </div>

            {/* dialogue */}
            {showDialogue && (
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute left-1/2 -translate-x-1/2 bottom-[3rem] w-[72rem] h-[13rem] rounded-[1.5rem] bg-[#071321] border-blue-400 border-[0.25rem] flex flex-col justify-center ml-30 mr-6"
                >
                    <h2 className="text-blue-400 text-[1.25rem] font-bold ml-4">
                        Recepce
                    </h2>

                    <p className="text-blue-400 text-[1.4rem] ml-4 mt-1 leading-tight w-[64rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            )}
        </div>
    )
}