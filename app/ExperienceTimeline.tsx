import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface Video {
  title: string;
  description: string;
  url: string;
}

interface VideoGridProps {
  videos: Video[];
  title: string;
}

interface Experience {
  period: string;
  title: string;
  description: string;
  content: string[];
  highlight: string;
}

const getYouTubeVideoId = (url: string): string => {
  let videoId = '';
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  } else if (url.includes('youtube.com/shorts/')) {
    videoId = url.split('shorts/')[1].split('?')[0];
  } else if (url.includes('youtube.com/watch')) {
    const urlParams = new URLSearchParams(url.split('?')[1]);
    videoId = urlParams.get('v') || '';
  }
  return videoId;
};

const getYouTubeThumbnailUrl = (url: string): string => {
  const videoId = getYouTubeVideoId(url);
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

const VideoGrid: React.FC<VideoGridProps> = ({ videos, title }) => {
  return (
    <div className="mt-16 mx-6">
      <h3 className="text-4xl font-bold text-center mb-10 text-gray-900">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => {
          const thumbnailUrl = getYouTubeThumbnailUrl(video.url);
          return (
            <motion.a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group relative block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition mx-4"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={thumbnailUrl}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h4>
                <p className="text-sm text-gray-600">{video.description}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

const ExperienceTimeline: React.FC = () => {
    // Video data
    const currentVideos: Video[] = [
      {
        title: "Mai kahi ",
        description: "Live performance at Studio Session",
        url: "https://youtube.com/shorts/3Rus9BtgreY?si=IhLGg8yo-pe79ujj"
      },
      {
        title: "Mai Kahi",
        description: "Official Lyrical video of the new single",
        url: "https://youtu.be/MYy05XUoPcU?si=1WgCbcfqTUgM4xot"
      },
    ];
  
    const previousVideos: Video[] = [
      {
        title: "Azlat",
        description: "Azlat",
        url: "https://www.youtube.com/watch?v=95oaP-g7Bnw"
      },
      {
        title: "Bow Down",
        description: "Bow Down",
        url: "https://youtu.be/I7lKPgmoJTE?si=cbqkAZ_bdG_SIG3g"
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
      },
    ];
  
    const experiences: Experience[] = [
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
  
    return (
      <motion.section
        id="experience"
        className="my-20 relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
        viewport={{ once: true }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 opacity-70" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
  
        <div className="relative">
          <motion.h2
            className="text-5xl font-bold mb-16 text-center text-gray-800"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            Musical Journey
          </motion.h2>
  
          {/* Timeline Section */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 via-pink-500 to-yellow-500" />
  
            {experiences.map((exp: Experience, index: number) => (
              <motion.div
                key={index}
                className={`flex ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } mb-16 relative`}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  show: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.6 }
                  }
                }}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6">
                  <div className="w-full h-full bg-yellow-400 rounded-full border-4 border-white shadow-lg transform hover:scale-150 transition-transform duration-300" />
                </div>
  
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <motion.div 
                    className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white text-sm font-semibold mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-purple-600 mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {exp.content.map((item: string, i: number) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <span className="text-yellow-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                      <p className="text-gray-700 italic">&ldquo;{exp.highlight}&rdquo;</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
  
          {/* Video Sections */}
          <div className="mt-24 space-y-24">
            <VideoGrid 
              title="Current Releases - Ujjwal Dhariwal" 
              videos={currentVideos} 
            />
            <VideoGrid 
              title="Archive - Shaapit Era" 
              videos={previousVideos} 
            />
          </div>
        </div>
      </motion.section>
    );
  };

export default ExperienceTimeline;
