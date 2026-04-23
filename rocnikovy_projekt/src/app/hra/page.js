import Nav from "./nav"
import Link from "next/link" 
export default function Home() {
    return(
        <>
            <div className="absolute z-[998] h-[100svh] w-[100%] flex justify-center items-center">
                <Link href="/places/recepce" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mt-77 mr-105 hover:opacity-40">1</Link>
                <Link href="/places/cardio" className="w-10 h-10 bg-white absolute cursor-pointer mb-43 mr-102 opacity-0 hover:opacity-40">2</Link>
                <Link href="/places/volne_vahy" className="w-10 h-10 bg-white absolute cursor-pointer ml-52 mt-7 opacity-0 hover:opacity-40">3</Link>
                <Link href="/places/skupinova" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 ml-46 mb-117 hover:opacity-40">5</Link>
                <Link href="/places/satna" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mb-83 ml-118 hover:opacity-40">7</Link>
                <Link href="/places/restroom" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 mt-113 mr-29 hover:opacity-40">6</Link>
                <Link href="/places/funkcni" className="w-10 h-10 bg-white absolute cursor-pointer opacity-0 ml-179 mb-32 hover:opacity-40">4</Link>
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