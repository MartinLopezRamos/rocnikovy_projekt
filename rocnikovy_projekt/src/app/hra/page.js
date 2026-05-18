"use client";
import Nav from "@/components/Nav"
import Link from "next/link"

export default function Home() {
    return (
        <div className="h-full w-full flex bg-[#071321] relative overflow-hidden">
            <Nav />

            <div className="flex-1 flex justify-center items-center pl-[15rem] relative">
                <div className="h-[40rem] w-[72rem] rounded-[2rem] bg-[url('/mapa_lepsi.png')] bg-center bg-cover flex justify-center items-center">
                    <Link href="/places/recepce" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mt-[16.2rem] mr-[21.9rem] hover:opacity-40" />
                    <Link href="/places/cardio" className="w-10 h-10 bg-white absolute cursor-pointer mb-[9rem] mr-[21.4rem] opacity-0 hover:opacity-40" />
                    <Link href="/places/volne_vahy" className="w-10 h-10 bg-white absolute cursor-pointer ml-[10.9rem] mt-[1.4rem] opacity-0 hover:opacity-40" />
                    <Link href="/places/skupinova" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 ml-[9.7rem] mb-[24.5rem] hover:opacity-40" />
                    <Link href="/places/satna" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mb-[17.5rem] ml-[24.8rem] hover:opacity-40" />
                    <Link href="/places/restroom" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mt-[23.6rem] mr-[5.9rem] hover:opacity-40" />
                    <Link href="/places/funkcni" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 ml-[37.5rem] mb-[6.7rem] hover:opacity-40" />

                    <Link href="/places/recepce" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mt-[13.2rem] mr-[64.9rem] hover:opacity-40" />
                    <Link href="/places/cardio" className="w-10 h-10 bg-white absolute cursor-pointer mt-[18.1rem] mr-[64.9rem] opacity-0 hover:opacity-40" />
                    <Link href="/places/volne_vahy" className="w-10 h-10 bg-white absolute cursor-pointer mr-[64.9rem] mt-[23.1rem] opacity-0 hover:opacity-40" />
                    <Link href="/places/skupinova" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 ml-[50.7rem] mt-[12.3rem] hover:opacity-40" />
                    <Link href="/places/satna" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mt-[22.5rem] ml-[50.7rem] hover:opacity-40" />
                    <Link href="/places/restroom" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mt-[32.5rem] ml-[50.7rem] hover:opacity-40" />
                    <Link href="/places/funkcni" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mr-[64.9rem] mt-[27.9rem] hover:opacity-40" />
                </div>
            </div>
        </div>
    )
}