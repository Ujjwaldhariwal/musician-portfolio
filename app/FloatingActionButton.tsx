import { motion } from 'framer-motion';

export function FloatingActionButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-purple-500 text-white rounded-full p-4 shadow-lg hover:bg-purple-600 transition-colors duration-300"
      variants={{
        hidden: { opacity: 0, x: 20 },
        show: { opacity: 1, x: 0 }
      }}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.05 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7 7 7" />
      </svg>
    </motion.button>
  );
}

// Add this component near the end of your Home component
