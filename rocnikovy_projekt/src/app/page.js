"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const menuItems = [
  { id: "new",      label: "Nová hra",    icon: "⚔",  description: "Začni své dobrodružství" },
  { id: "continue", label: "Pokračovat",  icon: "◈",  description: "Načíst uloženou hru" },
  { id: "settings", label: "Nastavení",   icon: "⚙",  description: "Grafika · Zvuk · Ovládání" },
  { id: "quit",     label: "Ukončit",     icon: "✕",  description: "Opustit hru" },
];

export default function Home() {
  const [selected, setSelected] = useState(0);
  const [visible, setVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    setParticles(
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: Math.random() * 8 + 5,
        delay: Math.random() * 6,
        size: Math.random() * 2 + 1,
      }))
    );
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;900&family=Cinzel+Decorative:wght@700&family=Crimson+Text:ital@1&display=swap');
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-cinzel-deco { font-family: 'Cinzel Decorative', serif; }
        .font-crimson { font-family: 'Crimson Text', serif; }
        @keyframes floatUp {
          0%   { opacity: 0; transform: translateY(0); }
          10%  { opacity: 0.6; }
          90%  { opacity: 0.2; }
          100% { opacity: 0; transform: translateY(-100vh); }
        }
        .particle { animation: floatUp linear infinite; }
        @keyframes blink {
          0%, 100% { opacity: 0.4; }
          50%  { opacity: 1; }
        }
        .blink { animation: blink 2.5s ease-in-out infinite; }
      `}</style>

      <div className="relative w-screen h-screen overflow-hidden bg-[#050810] flex items-center justify-center">

        {/* Background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,#0d1a3a,transparent),radial-gradient(ellipse_60%_50%_at_80%_20%,#0a1228,transparent)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(201,168,76,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.85)_100%)]" />

        {/* Particles */}
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

        <div className={`relative z-10 flex flex-col items-center transition-all duration-[1200ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          <p className="font-cinzel text-[10px] tracking-[0.5em] text-yellow-800 mb-3 uppercase">
            — Ročníkový projekt —
          </p>

          <h1
            className="font-cinzel-deco text-5xl md:text-7xl font-bold text-center leading-tight tracking-wide text-yellow-200"
            style={{ textShadow: "0 0 40px rgba(201,168,76,0.5), 0 0 80px rgba(201,168,76,0.2)" }}
          >
            MOZKY JAKO<br />HOUBY
          </h1>
          <p className="font-cinzel text-[11px] tracking-[0.55em] text-yellow-800 uppercase mt-2 mb-10">
            Martin López Ramos
          </p>

          <div className="w-72 h-px mb-10" style={{ background: "linear-gradient(90deg,transparent,#c9a84c,transparent)" }} />

          <nav className="flex flex-col gap-1.5 w-72">
            {menuItems.map((item, i) => {
              const active = selected === i;
              return (
                <Link href="/hra"
                  key={item.id}
                  className={`relative flex items-center gap-4 px-6 py-3.5 text-left w-full transition-all duration-200 border ${
                    active
                      ? "border-yellow-700/40 bg-gradient-to-r from-yellow-900/20 to-transparent"
                      : "border-transparent"
                  }`}
                  onMouseEnter={() => setSelected(i)}
                  onClick={() => setSelected(i)}
                >
                  <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 transition-all duration-300 ${active ? "h-3/5 opacity-100" : "h-0 opacity-0"}`}
                    style={{ background: "linear-gradient(to bottom,transparent,#c9a84c,transparent)" }}
                  />

                  <span className={`text-lg w-6 text-center flex-shrink-0 transition-all duration-200 ${active ? "text-yellow-200 scale-110" : "text-yellow-800"}`}>
                    {item.icon}
                  </span>

                  <div className="flex-1">
                    <span
                      className={`font-cinzel block text-[13px] font-semibold tracking-widest uppercase transition-all duration-200 ${active ? "text-yellow-200" : "text-slate-500"}`}
                      style={active ? { textShadow: "0 0 20px rgba(201,168,76,0.5)" } : {}}
                    >
                      {item.label}
                    </span>
                    <span className={`font-crimson italic text-[11px] tracking-wide transition-all duration-200 ${active ? "text-yellow-800" : "text-transparent"}`}>
                      {item.description}
                    </span>
                  </div>

                  <span className={`text-[9px] text-yellow-500 transition-all duration-200 ${active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}>▶</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}