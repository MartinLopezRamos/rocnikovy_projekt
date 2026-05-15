"use client";
import Nav from "@/components/Nav"
import Link from "next/link" 

export default function Home() {
    return(
        <div className="h-full w-full flex bg-[#071321] relative overflow-hidden">
            <Nav />
            
            <div className="flex-1 flex justify-center items-center pl-[18rem] relative">
                <div className="relative h-[40rem] w-[72rem] rounded-[2rem] border-blue-400 border-3 bg-[url('/mapa_lepsi.png')] bg-center bg-cover flex justify-center items-center p-10">
                    <Link href="/places/recepce" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mt-[16rem] mr-[21.6rem] hover:opacity-40" />
                    <Link href="/places/cardio" className="w-10 h-10 bg-white absolute cursor-pointer mb-[8.8rem] mr-[21rem] opacity-0 hover:opacity-40" />
                    <Link href="/places/volne_vahy" className="w-10 h-10 bg-white absolute cursor-pointer ml-[10.7rem] mt-[1.5rem] opacity-0 hover:opacity-40" />
                    <Link href="/places/skupinova" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 ml-[9.5rem] mb-[24rem] hover:opacity-40" />
                    <Link href="/places/satna" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mb-[17rem] ml-[24.5rem] hover:opacity-40" />
                    <Link href="/places/restroom" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mt-[23.4rem] mr-[5.9rem] hover:opacity-40" />
                    <Link href="/places/funkcni" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 ml-[37rem] mb-[6.5rem] hover:opacity-40" />
                    
                    <Link href="/places/recepce" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mt-[11.5rem] mr-[56.5rem] hover:opacity-40" />
                    <Link href="/places/cardio" className="w-10 h-10 bg-white absolute cursor-pointer mt-[15.75rem] mr-[56.5rem] opacity-0 hover:opacity-40" />
                    <Link href="/places/volne_vahy" className="w-10 h-10 bg-white absolute cursor-pointer mr-[56.5rem] mt-[20rem] opacity-0 hover:opacity-40" />
                    <Link href="/places/skupinova" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 ml-[44rem] mt-[10.75rem] hover:opacity-40" />
                    <Link href="/places/satna" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mt-[19.5rem] ml-[44rem] hover:opacity-40" />
                    <Link href="/places/restroom" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mt-[28.25rem] ml-[44rem] hover:opacity-40" />
                    <Link href="/places/funkcni" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mr-[56.5rem] mt-[24.25rem] hover:opacity-40" />
                </div>
            </div>
        </div>
    )
}