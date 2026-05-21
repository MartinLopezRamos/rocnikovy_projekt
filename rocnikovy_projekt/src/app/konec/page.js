"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useGameState } from "@/components/GameStateContext";

export default function KonecHry() {
  const { resetState } = useGameState();
  const [visible, setVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: Math.random() * 8 + 5,
        delay: Math.random() * 6,
        size: Math.random() * 2 + 1,
      }))
    );
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#050810] flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,#0d1a3a,transparent),radial-gradient(ellipse_60%_50%_at_80%_20%,#0a1228,transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(201,168,76,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.85)_100%)]" />

      {particles.map((p) => (
        <div
          key={p.id}
          className="particle absolute bottom-0 rounded-full bg-yellow-500"
          style={{ left: `${p.left}%`, width: p.size, height: p.size, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }}
        />
      ))}

      {[
        "top-14 left-14 border-t border-l",
        "top-14 right-14 border-t border-r",
        "bottom-14 left-14 border-b border-l",
        "bottom-14 right-14 border-b border-r",
      ].map((cls, i) => (
        <div key={i} className={`absolute w-8 h-8 border-yellow-700/40 ${cls}`} />
      ))}

      <div className={`relative z-10 flex flex-col items-center transition-all duration-[1500ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

        <h1
          className="text-6xl md:text-8xl font-bold text-center leading-tight tracking-wide text-yellow-200 mb-6"
          style={{ textShadow: "0 0 40px rgba(201,168,76,0.5), 0 0 80px rgba(201,168,76,0.2)" }}
        >
          KONEC HRY
        </h1>


        <div className="w-48 h-px mb-10" style={{ background: "linear-gradient(90deg,transparent,#c9a84c,transparent)" }} />

        <Link
          href="/"
          onClick={() => resetState()}
          className="relative flex items-center gap-4 px-8 py-4 text-left transition-all duration-300 border border-yellow-700/40 bg-gradient-to-r from-yellow-900/20 to-transparent hover:from-yellow-900/40 cursor-pointer group"
        >
          <div className="flex-1">
            <span className="italic text-[0.6875rem] tracking-wide text-yellow-300">
              Zpět na začátek
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
