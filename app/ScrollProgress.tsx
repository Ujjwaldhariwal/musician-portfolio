import { useState, useEffect } from 'react';

export function ScrollProgress() {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const width = (scrollTop / docHeight) * 100;
      setProgressWidth(width);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bg-purple-500 h-2 shadow-lg z-50">
      <div
        style={{ width: `${progressWidth}%` }}
        className="bg-gradient-to-r from-yellow-300 to-red-500 h-full rounded-full transition-all duration-300"
      />
    </div>
  );
}
