"use client";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { FloatingActionButton } from "./FloatingActionButton";
import { ScrollProgress } from "./ScrollProgress";
import ExperienceTimeline from "./ExperienceTimeline";
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-gray-100 text-gray-800">
      <Head>
        <title>Ujjwal Dhariwal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-16">
        {/* Hero Section */}
        <motion.section
          id="hero"
          className="text-center py-20 flex flex-col items-center"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.div
    className="absolute inset-0 bg-gradient-to-b from-beige-200 via-yellow-100 to-gold-200 opacity-60"
    variants={{
      hidden: { y: "-100%" },
      show: { y: 0 },
    }}
  />
          <motion.h2
            className="text-5xl font-bold mb-4 text-gray-700"
            variants={fadeInUp}
          >
            Singer, Songwriter, Guitarist & Composer
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-gray-600 italic"
            variants={fadeInUp}
          >
            Creating soulful melodies and unforgettable experiences
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Image
              src="https://ik.imagekit.io/UjjwalDhariwal/Portfolio/DSC06134.jpg?updatedAt=1728401065273"
              alt="Ujjwal Dhariwal"
              width={1920}
              height={1080}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mb-4"
              loading="lazy"
            />
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="my-20"
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-6 text-center text-gray-700"
            variants={fadeInUp}
          >
            About Me
          </motion.h2>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            variants={fadeInUp}
          >
            <p className="text-lg leading-relaxed text-gray-600">
              Hello! I am <strong>Ujjwal Dhariwal</strong>, 22 years old, born
              and raised in <strong>Sirsa, Haryana</strong>. Six years ago, I
              moved to <strong>Chandigarh</strong> to pursue my dreams. Coming
              from a<strong>musical</strong> family, my father was a{" "}
              <strong>harmonium</strong> player and a<strong>lyricist</strong>,
              which greatly influenced my passion for music.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              My journey began when I joined the Indian underground band
              battles. I draw inspiration from <strong>old Urdu ghazals</strong>
              , as well as <strong>Pakistani</strong> and{" "}
              <strong>Indian</strong> bands. I am particularly inclined towards{" "}
              <strong>alt pop</strong>, <strong>alt rock</strong>, and{" "}
              <strong>progressive rock</strong> styles.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Join me on this journey through my music!
            </p>
          </motion.div>
        </motion.section>


        <ExperienceTimeline />
        {/* Music Section */}
        <motion.section
          id="music"
          className="my-20"
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-6 text-center text-gray-700"
            variants={fadeInUp}
          >
            My Music
          </motion.h2>
          <div className="space-y-12">
            {/* Spotify Embed */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeInUp}
            >
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/album/2ImIQKCRRa8c1yb7YHm7mi?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </motion.section>

        {/* Playlist Section */}
        <motion.section
          id="playlist"
          className="my-20"
          initial="hidden"
          whileInView="show"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-6 text-center text-gray-700"
            variants={fadeInUp}
          >
            A Playlist for You ٩(◕‿◕)۶
          </motion.h2>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={fadeInUp}
          >
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/2gRmNIuvTMS0VyfYqVFG7n?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={fadeInUp}
          >
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/5iWAqqS9PEbqrgjTvNKzLe?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.section>

        {/* Random Photos Section */}
      
      </main>

      <footer className="py-6 text-center text-gray-600 bg-gradient-to-b from-purple-50 via-pink-100 to-yellow-50">
        <div className="container mx-auto px-4">
          <p>
            &copy; {new Date().getFullYear()} Ujjwal Dhariwal. All rights
            reserved.
          </p>
          <motion.div className="flex justify-center space-x-4 mt-4">
            <motion.a
              href="#hero"
              className="text-purple-500 hover:text-yellow-300 transition-colors duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              Back to Top
            </motion.a>
            {/* Add other social media links here */}
          </motion.div>
        </div>
      </footer>
      <FloatingActionButton />
      <ScrollProgress />
    </div>
  );
};

export default Home;
