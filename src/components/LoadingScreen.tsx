import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import logo from '../assets/logo.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Mulai animasi fade-out setelah 2 detik
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);

    // Selesaikan loading setelah animasi fade-out selesai
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ease-in-out overflow-hidden",
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[80px] animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-[60%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[100px] animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      </div>

      <div className="relative flex flex-col items-center gap-8 z-10 w-full max-w-sm px-6">
        
        {/* Logo & Multi-ring Spinner */}
        <div className="relative flex items-center justify-center w-32 h-32">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-[3px] border-secondary border-t-primary border-l-primary/50 animate-spin" style={{ animationDuration: '2s' }}></div>
          {/* Inner ring */}
          <div className="absolute inset-2 rounded-full border-[3px] border-secondary/50 border-b-primary/70 border-r-primary/30 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
          {/* Logo */}
          <div className="w-20 h-20 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full shadow-lg border border-border/50 animate-in zoom-in duration-500">
            <img src={logo} alt="JP & Co. Logo" className="w-14 h-14 object-contain" />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center w-full animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300 fill-mode-both">
          <h2 className="text-2xl font-serif font-bold tracking-widest text-foreground uppercase mb-1">JP & Co.</h2>
          <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-medium">Business Consulting</p>
        </div>

      </div>
    </div>
  );
}
