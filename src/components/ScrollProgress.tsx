import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-background/20 z-50">
      <div 
        className="h-full bg-gradient-to-r from-accent via-gold to-accent transition-all duration-200 ease-out relative overflow-hidden"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Pulsing glow effect */}
        <div className="absolute right-0 top-0 w-8 h-full bg-gold/80 blur-sm animate-pulse-slow"></div>
      </div>
    </div>
  );
};

export default ScrollProgress;