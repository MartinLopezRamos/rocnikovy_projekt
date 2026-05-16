"use client"

import { useState } from "react"
import Image from "next/image"
import Nav from "@/components/Nav"

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
                <div className="h-[40rem] w-[72rem] rounded-[2rem] ml-auto mr-6 border-blue-400 border-[0.25rem] flex justify-center items-center bg-[url('/cardio_lepsi.png')] bg-center bg-cover">

                    <button
                        id="cardio_girl_black"
                        onClick={toggleDialogue}
                        className="w-21 h-40 absolute cursor-pointer bg-white opacity-0 mb-[2rem] ml-[41rem]"
                    />

                    <button
                        id="cardio_guy_black"
                        onClick={toggleDialogue}
                        className="w-32 h-50 absolute cursor-pointer bg-white opacity-0 mb-[1rem] ml-[58rem]"
                    />

                    <button
                        id="cardio_guy_asian"
                        onClick={toggleDialogue}
                        className="w-19 h-35 absolute cursor-pointer bg-white opacity-0 mb-[6rem] ml-[27rem]"
                    />

                    <button
                        id="cardio_holka"
                        onClick={toggleDialogue}
                        className="w-19 h-40 absolute cursor-pointer bg-white opacity-0 mb-[3rem] mr-[33rem]"
                    />

                    <button
                        id="cardio_old_guy"
                        onClick={toggleDialogue}
                        className="w-30 h-50 absolute cursor-pointer bg-white opacity-0 mb-[3rem] mr-[48rem]"
                    />

                    <button
                        id="cardio_holka_2"
                        onClick={toggleDialogue}
                        className="w-14 h-35 absolute cursor-pointer bg-white opacity-0 mb-[4.3rem] mr-[23rem]"
                    />
                </div>
            </div>

            {showDialogue && (
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute left-1/2 -translate-x-1/2 bottom-[3rem] w-[72rem] h-[13rem] rounded-[1.5rem] bg-[#071321] border-blue-400 border-[0.25rem] flex flex-col justify-center ml-30 mr-6"
                >
                    <h2 className="text-blue-400 text-[1.25rem] font-bold ml-4">
                        Cardio zóna
                    </h2>

                    <p className="text-blue-400 text-[1.4rem] ml-4 mt-1 leading-tight w-[64rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            )}
        </div>
    )
}