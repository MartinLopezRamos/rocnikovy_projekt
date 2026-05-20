import Link from "next/link";
import Image from "next/image";

export default function HowToPlay() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#050810] flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,#0d1a3a,transparent),radial-gradient(ellipse_60%_50%_at_80%_20%,#0a1228,transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(201,168,76,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.85)_100%)]" />

      {[
        "top-14 left-14 border-t border-l",
        "top-14 right-14 border-t border-r",
        "bottom-14 left-14 border-b border-l",
        "bottom-14 right-14 border-b border-r",
      ].map((cls, i) => (
        <div key={i} className={`absolute w-8 h-8 border-yellow-700/40 ${cls}`} />
      ))}

      <div className="absolute top-10 left-10 z-50">
        <Link
          href="/"
          className="bg-[#E6B30E] w-12 h-12 flex justify-center items-center rounded-full shrink-0 hover:scale-110 transition-transform"
        >
          <div className="relative w-8 h-8 mr-1">
            <Image
              src="/sipka.png"
              alt="arrow"
              fill
              className="object-contain brightness-200"
            />
          </div>
        </Link>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-3xl w-full px-8">
        <p className="text-[0.625rem] tracking-[0.5em] text-yellow-800 mb-3 uppercase">
          — Návod k obsluze —
        </p>

        <h1
          className="text-5xl font-bold text-center leading-tight tracking-wide text-yellow-200 mb-10"
          style={{ textShadow: "0 0 40px rgba(201,168,76,0.5)" }}
        >
          JAK HRÁT
        </h1>

        <div className="w-full h-px mb-10" style={{ background: "linear-gradient(90deg,transparent,#c9a84c,transparent)" }} />

        <div className="text-yellow-100/80 space-y-6 text-lg leading-relaxed text-center">
          <p>
            Cílem hry je najít bájný <strong>Kouzelný protein</strong>, o kterém kolují legendy. Budeš ale muset prohledat celou posilovnu!
          </p>
          <p>
            Všímej si detailů, prozkoumávej jednotlivé místnosti a hlavně – <strong className="text-yellow-400">klikej na lidi a na předměty</strong>. Mnohé skrývají nápovědy, podivná tlačítka nebo užitečné věci, které ti pomohou se dostat dál. 
          </p>
          <p>
            Vše se ovládá pouhým klikáním myší. Postup se ukládá automaticky, takže se můžeš kdykoliv vrátit pomocí tlačítka <em>Pokračovat</em> v hlavním menu. Krok zpět nebo návrat na mapu uděláš vždy zlatou šipkou v levém horním rohu.
          </p>
          <p className="pt-6 text-yellow-500/70 text-sm">
            Hodně štěstí a hlavně ať to roste!
          </p>
        </div>
      </div>
    </div>
  );
}
