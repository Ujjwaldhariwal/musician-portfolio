"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, Music, Disc, Radio, Headphones } from 'lucide-react';
import HomeButton from '../components/HomeButton';


interface Video {
  title: string;
  description: string;
  url: string;
}

interface Experience {
  period: string;
  title: string;
  description: string;
  content: string[];
  highlight: string;
}
const getYouTubeVideoId = (url: string): string => {
  const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : "";
};

const CURRENT_VIDEOS: Video[] = [
  {
    title: "Mai kahi",
    description: "Live performance at Studio Session",
    url: "https://youtube.com/shorts/3Rus9BtgreY?si=IhLGg8yo-pe79ujj"
  },
  {
    title: "Mai Kahi",
    description: "Official Lyrical video of the new single",
    url: "https://youtu.be/MYy05XUoPcU?si=1WgCbcfqTUgM4xot"
  }
];

const ARCHIVE_VIDEOS: Video[] = [
  {
    title: "Azlat",
    description: "Deep introspective journey through sound",
    url: "https://www.youtube.com/watch?v=95oaP-g7Bnw"
  },
  {
    title: "Bow Down",
    description: "Powerful anthem of self-expression",
    url: "https://youtu.be/I7lKPgmoJTE"
  },
  {
    title: "Am Awake",
    description: "Am Awake",
    url: "https://youtu.be/Vhk1OZ3AWLk?si=UhJh4XO0JHWx9skh"
  },
  {
    title: "Koi Bhi nahi",
    description: "Koi Bhi nahi",
    url: "https://youtu.be/uwky8j3MvzI?si=TTxhny7uh5_mM8Gu"
  },
  {
    title: "Tere Nishaan",
    description: "Tere Nishaan",
    url: "https://youtu.be/JY17BdUemY4?si=13VhRQE-reAl3mse"
  },
  {
    title: "Jaane hi diya",
    description: "Jaane hi diya",
    url: "https://youtu.be/b8Ug190WTCw?si=Js9xPiDY1ZvoiE8G"
  },
  {
    title: "Pehchaan - Weeknd The hills refixx",
    description: "Pehchaan - Weeknd The hills refixx",
    url: "https://youtu.be/JtOfIBCZ7SI?si=MPNOUgw_qXGwrkaQ"
  }
  // Add more videos as needed
];

const EXPERIENCES: Experience[] = [
  {
    period: "Present",
    title: "Ujjwal Dhariwal",
    description: "Singer-Songwriter & Composer",
    content: [
      "Creating original compositions blending various musical styles",
      "Released multiple singles and albums on major streaming platforms",
      "Performing live shows and intimate acoustic sessions"
    ],
    highlight: "Currently focusing on creating soulful melodies that blend traditional and modern elements"
  },
  {
    period: "2021",
    title: "College Festival Organizer",
    description: "Music Competition Lead",
    content: [
      "Successfully organized and managed music competitions with 500+ student participants",
      "Coordinated multiple events and performances",
      "Created opportunities for emerging student artists"
    ],
    highlight: "Brought together diverse musical talents from across the region"
  },
  {
    period: "2018-2021",
    title: "Shaapit",
    description: "Hip Hop Artist",
    content: [
      "Created and performed original hip hop compositions",
      "Built a following in the underground music scene",
      "Released multiple tracks and music videos"
    ],
    highlight: "Established presence in the underground hip hop community"
  }
];

const VideoCard: React.FC<{ video: Video; index: number }> = ({ video, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${getYouTubeVideoId(video.url)}/maxresdefault.jpg`;
  
  return (
    <motion.a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-500"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative aspect-video">
        <Image src={thumbnailUrl} alt={video.title} fill className="object-cover" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Play className="w-16 h-16 text-white filter drop-shadow-glow" />
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        className="p-4 bg-white/90 backdrop-blur-md"
        initial={{ y: 100 }}
        animate={{ y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <h4 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h4>
        <p className="text-sm text-gray-600">{video.description}</p>
      </motion.div>
    </motion.a>
  );
};

const TimelineItem: React.FC<{ experience: Experience; isEven: boolean }> = ({ experience, isEven }) => {
  const icons = [Music, Disc, Radio, Headphones];
  const Icon = icons[Math.floor(Math.random() * icons.length)];
  
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full md:w-1/2 px-4 md:px-12">
        <motion.div 
          className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
          
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white text-sm font-semibold mb-4 shadow-lg">
            {experience.period}
          </span>
          
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-6 h-6 text-purple-500" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-800">{experience.title}</h3>
          </div>
          
          <p className="text-lg text-purple-600 mb-4 font-medium">{experience.description}</p>
          
          <ul className="space-y-3 mb-6">
            {experience.content.map((item, i) => (
              <motion.li 
                key={i}
                className="flex items-start text-gray-600 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-yellow-500 mr-2 group-hover:animate-bounce">•</span>
                {item}
              </motion.li>
            ))}
          </ul>
          
          <motion.div 
            className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-gray-700 italic">&ldquo;{experience.highlight}&rdquo;</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const VideoSection: React.FC<{ title: string; videos: Video[] }> = ({ title, videos }) => (
  <motion.div 
    className="mt-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center justify-center gap-4 mb-10">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <Music className="w-8 h-8 text-purple-500" />
      </motion.div>
      <h3 className="text-3xl font-bold text-center text-gray-900">{title}</h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-6">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} index={index} />
      ))}
    </div>
  </motion.div>
);

const MusicalJourney: React.FC = () => {
  return (
    <>
      <motion.section 
        className="py-16 md:py-20 bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 min-h-screen relative"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-[url('/music-pattern.png')] opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 0.98, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500">
                Musical Journey
              </h2>
            </motion.div>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 via-pink-500 to-yellow-500 hidden md:block" />
            {EXPERIENCES.map((exp, index) => (
              <TimelineItem key={index} experience={exp} isEven={index % 2 === 0} />
            ))}
          </div>
          
          <VideoSection title="Current Releases" videos={CURRENT_VIDEOS} />
          <VideoSection title="Archive" videos={ARCHIVE_VIDEOS} />
        </div>
      </motion.section>
      <HomeButton />
    </>
  );
};

export default MusicalJourney;