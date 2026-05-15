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

            <div className="absolute left-0 top-0 h-full flex flex-col mt-97 pointer-events-none w-[18rem]">
                <div className="pointer-events-auto">
                    <div className="w-[14rem] ml-3">
                        <Image src="/bolek_edited.png" alt="bolek" width={300} height={300} className="w-full h-auto object-contain" />
                    </div>
                </div>
            </div>

            <div className="absolute w-[42rem] h-[13rem] rounded-[1.5rem] bg-[#071321] border-blue-400 border-[0.2rem] flex flex-col justify-center mt-44 ml-5">
                <h2 className="text-blue-400 text-[1.25rem] font-bold ml-4">Bolek</h2>
                <p className="text-blue-400 text-[1.4rem] ml-4 mt-1 leading-tight w-[40rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-blue-400 absolute mt-57 ml-20"></div>
            </div>
        </div>
    )
}