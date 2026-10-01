import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import logo from '../assets/logo.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Mulai animasi fade-out setelah 1.5 detik
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1500);

    // Selesaikan loading setelah animasi fade-out selesai (tambah 500ms)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-in-out",
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex items-center justify-center w-24 h-24">
          <div className="absolute inset-0 rounded-full border-4 border-secondary border-t-primary animate-spin"></div>
          <div className="w-16 h-16 flex items-center justify-center">
            <img src={logo} alt="JP & Co. Logo" className="w-12 h-12 object-contain" />
          </div>
        </div>
        <div className="flex flex-col items-center animate-pulse">
          <h2 className="text-xl font-serif font-bold tracking-widest text-foreground uppercase">JP & Co.</h2>
          <p className="text-xs text-muted-foreground tracking-widest mt-2 uppercase">Consulting</p>
        </div>
      </div>
    </div>
  );
}
