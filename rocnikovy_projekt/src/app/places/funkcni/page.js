import Nav from "@/components/Nav"

export default function Home() {
    return (
        <div className="h-full w-full flex bg-[#071321] relative overflow-hidden">
            <Nav backHref="/hra" />
            <div className="flex-1 flex justify-center items-center mt-[-10rem]">
                <div className="h-[40rem] w-[72rem] rounded-[2rem] ml-auto mr-6 border-blue-400 border-3 flex justify-center items-center bg-[url('/funkcni_trenink.png')] bg-center bg-cover"></div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[3rem] w-[72rem] h-[13rem] rounded-[1.5rem] bg-[#071321] border-blue-400 border-3 flex flex-col justify-center ml-30 mr-6">
                <h2 className="text-blue-400 text-[1.25rem] font-bold ml-4">Funkční trénink</h2>
                <p className="text-blue-400 text-[1.4rem] ml-4 mt-1 leading-tight w-[64rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    )
}
