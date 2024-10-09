import { useState, useEffect } from 'react';

export function ScrollProgress() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const progressWidth = (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 bg-purple-500 h-2 shadow-lg z-50">
      <div
        style={{ width: `${progressWidth}%` }}
        className="bg-gradient-to-r from-yellow-300 to-red-500 h-full rounded-full transition-all duration-300"
      />
    </div>
  );
}
