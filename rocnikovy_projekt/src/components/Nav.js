import Link from "next/link"
import Image from "next/image"

export default function Nav({ backHref = "/" }) {
    return (
        <div className="z-[999]">
            <div className="w-full mt-10 flex items-center absolute top-0 left-0 px-10">
                <Link href={backHref} className="bg-[#E6B30E] w-12 h-12 flex justify-center items-center rounded-full shrink-0">
                    <div className="relative w-8 h-8 mr-1">
                        <Image src="/sipka.png" alt="arrow" fill className="object-contain brightness-200" />
                    </div>
                </Link>
            </div>

            <div className="absolute left-0 top-0 h-full flex flex-col mt-82 pointer-events-none w-[18rem]">
                <div className="pointer-events-auto">
                    <div className="w-[14rem] ml-3">
                        <Image src="/bolek_edited.png" alt="bolek" width={300} height={300} className="w-full h-auto object-contain" />
                    </div>
                </div>
            </div>
        </div>
    )
}