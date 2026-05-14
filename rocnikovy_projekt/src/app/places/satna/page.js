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
                    bg-[url('/satna.png')] bg-center bg-cover"></div>
            </div>
            <div className="w-47 mt-95 ml-200 absolute">
                <Image src="/bolek_seductive_best.png" alt="bolek" width={300} height={300} className="object-contain"></Image>
            </div>
            <div className="absolute w-200 h-40 rounded-[30px] bg-[#071321] self-center mt-172 border-blue-400 border-3">
                <h2 className="text-blue-400 ml-4 text-[25px] mt-2">Bolek</h2>
                <p className="text-blue-400 ml-4 text-[18px] mt-0 w-[700px] h-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="font-bold text-[40px] text-blue-400 cursor-pointer absolute ml-180 ">→</button>
            </div>
        </>
    )
}