"use client"
import { useState } from "react"
import Nav from "@/components/Nav"

export default function Home() {
    const [pinOpen, setPinOpen] = useState(false)
    const [pin, setPin] = useState("")
    const [status, setStatus] = useState("idle")

    const handleDigit = (d) => {
        if (pin.length >= 4) return
        const next = pin + d
        setPin(next)
        if (next.length === 4) {
            setTimeout(() => {
                if (next === "1234") {
                    setStatus("success")
                    setTimeout(() => { setPinOpen(false); setPin(""); setStatus("idle") }, 900)
                } else {
                    setStatus("error")
                    setTimeout(() => { setPin(""); setStatus("idle") }, 800)
                }
            }, 120)
        }
    }

    return (
        <div className="h-full w-full flex bg-[#071321] relative overflow-hidden">
            <Nav backHref="/hra" />
            <div className="flex-1 flex justify-center items-center mt-[-10rem]">
                <div className="h-[40rem] w-[72rem] ml-auto mr-6 border-blue-400 border-[0.25rem] flex justify-center items-center bg-[url('/trezor.png')] bg-center bg-cover">
                    <button
                        id="trezor"
                        className="w-40 h-45 absolute cursor-pointer bg-white opacity-0 mb-[2rem] ml-[1.1rem]"
                        onClick={() => setPinOpen(true)}
                    />
                </div>
            </div>

            {pinOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div
                        className="relative w-[280px] ml-70 mb-40 p-7 text-center cursor-default shadow-2xl"
                        style={{
                            background: "#1c160a", // Tmavé, ale ne úplná tma
                            border: "2px solid #b38728", // Zlatý rámeček, co je fakt vidět
                        }}
                    >
                        <button
                            onClick={() => { setPinOpen(false); setPin(""); setStatus("idle") }}
                            className="absolute right-3 top-3 cursor-pointer transition-colors"
                            style={{ color: "#b38728", fontFamily: "serif", fontSize: "18px" }}
                            onMouseEnter={e => e.target.style.color = "#fcd34d"}
                            onMouseLeave={e => e.target.style.color = "#b38728"}
                        >✕</button>

                        <p style={{ fontFamily: "serif", color: "#fcd34d", fontSize: "13px", letterSpacing: "0.05em", marginBottom: "2px", fontWeight: "bold" }}>BEZPEČNOSTNÍ ZÁMEK</p>
                        <p style={{ fontFamily: "serif", color: "#d4af37", fontSize: "11px", marginBottom: "16px" }}>zadejte čtyřmístný kód</p>

                        <div style={{ width: "60%", height: "1px", background: "#b38728", margin: "0 auto 16px" }} />

                        <div className="flex justify-center gap-4 mb-5">
                            {[0, 1, 2, 3].map(i => (
                                <div key={i} style={{
                                    width: "12px", height: "12px",
                                    border: `2px solid ${i < pin.length ? (status === "error" ? "#ef4444" : "#fcd34d") : "#4a3b1c"}`,
                                    background: i < pin.length ? (status === "error" ? "#ef4444" : "#d4af37") : "transparent",
                                    transition: "all 0.15s"
                                }} />
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-1">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                                <button
                                    key={n}
                                    onClick={() => handleDigit(String(n))}
                                    style={{
                                        fontFamily: "serif",
                                        fontSize: "18px",
                                        color: "#fcd34d", // Jasná zlatá
                                        background: "#292110", // Viditelné podkreslení tlačítek
                                        border: "1px solid #8a6d25",
                                        padding: "10px 0",
                                        cursor: "pointer",
                                        transition: "all 0.15s"
                                    }}
                                    onMouseEnter={e => { e.target.style.background = "#3b2f17"; e.target.style.color = "#fffbeb" }}
                                    onMouseLeave={e => { e.target.style.background = "#292110"; e.target.style.color = "#fcd34d" }}
                                >{n}</button>
                            ))}
                            <div />
                            <button
                                onClick={() => handleDigit("0")}
                                style={{
                                    fontFamily: "serif",
                                    fontSize: "18px",
                                    color: "#fcd34d",
                                    background: "#292110",
                                    border: "1px solid #8a6d25",
                                    padding: "10px 0",
                                    cursor: "pointer",
                                    transition: "all 0.15s"
                                }}
                                onMouseEnter={e => { e.target.style.background = "#3b2f17"; e.target.style.color = "#fffbeb" }}
                                onMouseLeave={e => { e.target.style.background = "#292110"; e.target.style.color = "#fcd34d" }}
                            >0</button>
                            <button
                                onClick={() => setPin(p => p.slice(0, -1))}
                                style={{
                                    fontFamily: "serif",
                                    fontSize: "16px",
                                    color: "#d4af37",
                                    background: "#292110",
                                    border: "1px solid #8a6d25",
                                    padding: "10px 0",
                                    cursor: "pointer",
                                    transition: "all 0.15s"
                                }}
                                onMouseEnter={e => { e.target.style.background = "#3b2f17"; e.target.style.color = "#ef4444" }}
                                onMouseLeave={e => { e.target.style.background = "#292110"; e.target.style.color = "#d4af37" }}
                            >⌫</button>
                        </div>

                        <div style={{ width: "60%", height: "1px", background: "#b38728", margin: "12px auto 8px" }} />

                        <p style={{
                            fontFamily: "serif",
                            fontSize: "11px",
                            minHeight: "16px",
                            color: status === "error" ? "#ef4444" : status === "success" ? "#22c55e" : "transparent",
                            letterSpacing: "0.05em",
                            fontWeight: "bold"
                        }}>
                            {status === "error" ? "— přístup odepřen —" : status === "success" ? "— vstup povolen —" : "."}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}