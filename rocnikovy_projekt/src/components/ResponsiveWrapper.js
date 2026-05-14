"use client";

export default function ResponsiveWrapper({ children }) {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div
        className="aspect-[4/3] bg-[#050810] relative shadow-2xl overflow-hidden"
        style={{
          width: 'min(100vw, calc(100vh * 4 / 3))',
          height: 'min(100vh, calc(100vw * 3 / 4))',
        }}
      >
        {children}
      </div>
    </div>
  );
}
