import Image from "next/image"
export default function Home() {
    return(
        <div className="h-[100svh] w-[100%] flex justify-center items-center">
            <Image src="/" alt="pozadi" fill className="object-cover"></Image>
            <Image src="/bolek.png" alt="bolek" width={300} height={300} className="absolute h-[200px] w-[200px]"></Image>
        </div>
    )
}