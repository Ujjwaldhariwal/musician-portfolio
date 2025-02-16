import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const HomeButton = () => {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.push('/')}
      className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-xl hover:shadow-2xl"
      whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 200, damping: 8 }}
    >
      <Home className="w-6 h-6" />
    </motion.button>
  );
};

export default HomeButton;