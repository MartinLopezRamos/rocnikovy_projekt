import Link from "next/link"
import Image from "next/image"
export default function Nav() {
    return(
        <div className="fixed z-999 w-[100%] h-[7rem] flex items-center">
            <div className="bg-[#E6B30E] w-12 h-12 flex justify-center items-center ml-10 rounded-full">
                <Link href="/" className="relative w-8 h-8 mr-1">
                    <Image src="/sipka.png" alt="arrow" fill className="object-contain brightness-200"></Image>
                </Link>
            </div>
            <div className="bg-[#E6B30E] w-12 h-12 flex justify-center items-center ml-auto mr-10 rounded-full">
                <Link href="/" className="relative w-8 h-8">
                    <Image src="/image_copy.png" alt="arrow" fill className="object-contain brightness-999"></Image>
                </Link>
            </div>
        </div>
    )
}