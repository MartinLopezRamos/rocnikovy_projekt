"use client"

import { useState } from "react"
import Nav from "@/components/Nav"
import Link from "next/link"

export default function Home() {
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
                <div className="h-[40rem] w-[72rem] rounded-[2rem] ml-auto mr-6 border-blue-400 border-[0.25rem] flex justify-center items-center bg-[url('/funkcni_trenink_dvere.png')] bg-center bg-cover">

                    <button
                        id="borec_deadlift"
                        onClick={toggleDialogue}
                        className="w-29 h-45 absolute cursor-pointer bg-white opacity-0 mt-[5.5rem] ml-[20.5rem]"
                    />

                    <button
                        id="holka_shyby"
                        onClick={toggleDialogue}
                        className="w-35 h-90 absolute cursor-pointer bg-white opacity-0 mt-[2rem] mr-[56rem]"
                    />

                    <button
                        id="cernoska"
                        onClick={toggleDialogue}
                        className="w-34 h-45 absolute cursor-pointer bg-white opacity-0 mt-[10rem] ml-[62rem]"
                    />

                    <button
                        id="borec_kettlebell"
                        onClick={toggleDialogue}
                        className="w-30 h-70 absolute cursor-pointer bg-white opacity-0 mt-[12rem] mr-[15rem]"
                    />

                    <Link
                        href="/places/secret"
                        id="dvere"
                        className="w-25 h-37 absolute cursor-pointer bg-white opacity-0 mb-[7.4rem] ml-[2.5rem]"
                    />
                </div>
            </div>

            {showDialogue && (
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute left-1/2 -translate-x-1/2 bottom-[3rem] w-[72rem] h-[13rem] rounded-[1.5rem] bg-[#071321] border-blue-400 border-[0.25rem] flex flex-col justify-center ml-30 mr-6"
                >
                    <h2 className="text-blue-400 text-[1.25rem] font-bold ml-4">
                        Funkční trénink
                    </h2>

                    <p className="text-blue-400 text-[1.4rem] ml-4 mt-1 leading-tight w-[64rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            )}
        </div>
    )
}