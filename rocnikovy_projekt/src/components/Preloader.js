"use client";
import { useState, useEffect } from "react";

const IMAGES_TO_LOAD = [
  "/background_1.png",
  "/bolek_edited.png",
  "/bolek_seductive_best.png",
  "/bolek_stojka.png",
  "/bolek_ucitel_best.png",
  "/bolek_upgrade.png",
  "/cardio.png",
  "/cardio_lepsi.png",
  "/funkcni_trenink.png",
  "/image.png",
  "/image_copy.png",
  "/lying.png",
  "/mapa.png",
  "/mapa_lepsi.png",
  "/prehled.png",
  "/recepce.png",
  "/restroom.png",
  "/satna.png",
  "/sedet.png",
  "/setting.png",
  "/sipka.png",
  "/skupinova.png",
  "/skupinova_lekce.png",
  "/volne_vahy.png",
];

export default function Preloader({ children }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const totalCount = IMAGES_TO_LOAD.length;

    if (totalCount === 0) {
      setLoading(false);
      return;
    }

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.round((loadedCount / totalCount) * 100);
      setProgress(newProgress);
      if (loadedCount === totalCount) {
        setTimeout(() => setLoading(false), 500);
      }
    };

    IMAGES_TO_LOAD.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress;
    });
  }, []);

  if (!loading) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#050810] flex flex-col items-center justify-center font-cinzel">
      <div className="relative w-64 h-1 bg-yellow-900/30 overflow-hidden mb-4">
        <div
          className="absolute left-0 top-0 h-full bg-yellow-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-yellow-500 text-[0.625rem] tracking-[0.3em] uppercase">
        Načítání dobrodružství... {progress}%
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-yellow-700/20" />
        <div className="absolute top-10 right-10 w-20 h-20 border-t border-r border-yellow-700/20" />
        <div className="absolute bottom-10 left-10 w-20 h-20 border-b border-l border-yellow-700/20" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-yellow-700/20" />
      </div>
    </div>
  );
}
