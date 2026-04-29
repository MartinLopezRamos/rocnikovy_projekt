import Link from "next/link"
import Image from "next/image"
export default function Nav() {
    return(
        <div>
            <div className="w-full mt-10 flex items-center w-[100%] fixed z-999">
                <Link href="/" className="bg-[#E6B30E] w-12 h-12 flex justify-center items-center ml-10 rounded-full">
                    <div className="relative w-8 h-8 mr-1">
                        <Image src="/sipka.png" alt="arrow" fill className="object-contain brightness-200"></Image>
                    </div>
                </Link>
                <Link href="/"  className="bg-[#E6B30E] w-12 h-12 flex justify-center items-center ml-auto mr-10 rounded-full">
                    <div className="relative w-8 h-8">
                        <Image src="/image_copy.png" alt="arrow" fill className="object-contain brightness-999"></Image>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col mt-50 w-[100%] fixed">
                <h2 className="font-bold text-[#E6B30E] text-[70px] mt-40 ml-7">Bolek</h2>
                <div className="w-50 ml-4">
                    <Image src="/bolek_edited.png" alt="bolek" width={300} height={300} className="object-contain"></Image>
                </div>
            </div>
        </div>
    )
}