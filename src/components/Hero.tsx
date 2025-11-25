import { ChevronDown } from 'lucide-react';
import portfolioPic from '../../dist/assets/portfolio.png';
interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 bg-black text-white relative overflow-hidden">

      {/* NAME */}
      <div className="absolute top-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase">
          Fatima Ezzahra Ouaourikt
        </h2>
        <div className=" mx-auto mt-10 border-t border-white" />
      </div>

      {/* CENTER CONTENT */}
      <div className="relative flex flex-col items-center justify-center">
        
        {/* LARGE WHITE SCRIBBLE BEHIND */}
        <img
          src={portfolioPic}    // ⬅ replace with your scribble image
          className="w-[900px] opacity-80 select-none pointer-events-none"
          alt=""
        />
      </div>

      {/* YEAR */}
      <div className="absolute bottom-24 text-center">
        <div className="w-32 mx-auto mb-3 border-t border-white" />
        <p className="text-3xl md:text-4xl font-light tracking-wide">2025/2026</p>
      </div>

      {/* SCROLL BUTTON */}
      <button
        onClick={() => onNavigate("about")}
        className="absolute bottom-8 animate-bounce hover:scale-110 transition-transform"
      >
        <ChevronDown size={48} strokeWidth={1} />
      </button>
    </div>
  );
}
