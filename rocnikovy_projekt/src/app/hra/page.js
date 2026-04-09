import Image from "next/image"
export default function Home() {
    return(
        <div className="h-[100svh] w-[100%]">
            <Image src="/" alt="pozadi" fill className="object-cover"></Image>
            <div></div>
        </div>
    )
}