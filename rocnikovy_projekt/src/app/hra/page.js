import Nav from "./nav"
export default function Home() {
    return(
        <>
        <Nav/>
            <div className="h-[100svh] w-[100%] flex justify-center items-center bg-[#071321]">
            <div className="h-[768px] w-[1408px] rounded-[40px] p-10 border-blue-400 border-3 flex justify-center items-center
                bg-[url('/mapa_lepsi.png')] bg-center bg-cover">
                </div>
            </div>
        </>
    )
}