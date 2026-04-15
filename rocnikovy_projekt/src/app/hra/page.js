import Image from "next/image"
import Nav from "./nav"
export default function Home() {
    return(
        <>
        <Nav/>
            <div className="h-[100svh] w-[100%] flex justify-center items-center bg-[#071321]">
            <div className="h-[768px] w-[1408px] rounded-[40px] p-10 border-blue-400 border-3 flex justify-center items-center
                bg-[url('/mapa.png')] bg-center bg-cover">
                    {/* <div className="absolute w-40">
                        <Image src="/bolek_edited.png" alt="bolek" width={300} height={300} className="object-contain"></Image>
                    </div> */}
                </div>
            </div>
        </>
    )
}