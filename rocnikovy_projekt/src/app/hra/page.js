import Nav from "./nav"
import Link from "next/link" 
export default function Home() {
    return(
        <>
        <div className="absolute z-[999999999] h-[100svh] w-[100%] flex justify-center items-center">
            <Link href="/places/recepce" className="w-10 h-10 bg-white cursor-pointer opacity-100 hover:opacity-40"></Link>
            <Link href="/places/cardio" className="w-10 h-10 bg-white cursor-pointer opacity-0 hover:opacity-40"></Link>
            <Link href="/places/volne_vahy" className="w-10 h-10 bg-white cursor-pointer opacity-0 hover:opacity-40"></Link>
            <Link href="/places/skupinova" className="w-10 h-10 bg-white cursor-pointer opacity-0 hover:opacity-40"></Link>
            <Link href="/places/satna" className="w-10 h-10 bg-white cursor-pointer opacity-0 hover:opacity-40"></Link>
            <Link href="/places/restroom" className="w-10 h-10 bg-white cursor-pointer opacity-0 hover:opacity-40"></Link>
            <Link href="/places/funkcni" className="w-10 h-10 bg-white cursor-pointer opacity-0 hover:opacity-40"></Link>
        </div>
        <Nav/>
            <div className="h-[100svh] w-[100%] flex justify-center items-center bg-[#071321]">
                <div className="h-[768px] w-[1408px] rounded-[40px] p-10 border-blue-400 border-3 flex justify-center items-center
                    bg-[url('/mapa_lepsi.png')] bg-center bg-cover">
                </div>
            </div>
        </>
    )
}