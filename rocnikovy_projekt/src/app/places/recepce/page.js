import Nav from "@/components/Nav"

export default function Home() {
    return (
        <div className="h-full w-full flex bg-[#071321] relative overflow-hidden">
            <Nav backHref="/hra" />
            <div className="flex-1 flex justify-center items-center">
                <div className="h-[40rem] w-[72rem] rounded-[2rem] ml-auto mr-6 border-blue-400 border-3 flex justify-center items-center bg-[url('/recepce.png')] bg-center bg-cover"></div>
            </div>
        </div>
    )
}