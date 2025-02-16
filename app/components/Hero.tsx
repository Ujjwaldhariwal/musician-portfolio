import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => (
  <div className="text-center py-20">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-5xl font-bold mb-4 text-gray-700">Ujjwal Dhariwal</h1>
      <p className="text-xl mb-8 text-gray-600 italic">Singer, Songwriter, Guitarist & Composer</p>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <Image
          src="https://ik.imagekit.io/UjjwalDhariwal/Portfolio/DSC06134.jpg"
          alt="Ujjwal Dhariwal"
          width={1920}
          height={1080}
          className="rounded-lg shadow-lg"
          priority
        />
      </motion.div>
    </motion.div>
  </div>
);

export default Hero;