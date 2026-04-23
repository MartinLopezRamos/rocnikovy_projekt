import Image from "next/image"
import Link from "next/link"
export default function Home() {
    return(
        <>
            <Link href="/hra" className="fixed z-999 bg-[#E6B30E] w-12 h-12 flex justify-center items-center ml-10 mt-10 rounded-full">
                    <div className="relative w-8 h-8 mr-1">
                        <Image src="/sipka.png" alt="arrow" fill className="object-contain brightness-200"></Image>
                    </div>
                </Link>
            <div className="h-[100svh] w-[100%] flex justify-center items-center bg-[#071321]">
                <div className="h-[768px] w-[1408px] rounded-[40px] p-10 border-blue-400 border-3 flex justify-center items-center
                    bg-[url('/volne_vahy.png')] bg-center bg-cover"></div>
            </div>
            <div className="w-40 mt-80 ml-225 absolute">
                <Image src="/sedet.png" alt="bolek" width={300} height={300} className="object-contain"></Image>
            </div>
        </>
    )
}