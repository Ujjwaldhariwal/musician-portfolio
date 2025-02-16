"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import HomeButton from "../components/HomeButton";

interface Inspiration {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
}

const inspirations: Inspiration[] = [
    {
      id: 1,
      name: "The 1975",
      type: "Indie Pop / Alternative Rock",
      imageUrl: "/images/1975.jpg",
    },
    {
      id: 2,
      name: "Radiohead",
      type: "Alternative Rock / Experimental Rock",
      imageUrl: "/images/radiohead.jpg",
    },
    {
      id: 3,
      name: "Lord Huron",
      type: "Indie Folk",
      imageUrl: "/images/Lord huron.png",
    },
    {
      id: 4,
      name: "Xulfiqar Jabbar Khan",
      type: "Alternative Rock / Fusion",
      imageUrl: "/images/Xulfi.jpg",
    },
    {
      id: 5,
      name: "New West",
      type: "Indie Rock / Alternative",
      imageUrl: "/images/New west.png",
    },
    {
      id: 6,
      name: "Coldplay",
      type: "Alternative Rock / Pop Rock",
      imageUrl: "/images/coldplay.jpg",
    },
    {
      id: 7,
      name: "Alice in Chains",
      type: "Grunge / Alternative Metal",
      imageUrl: "/images/alice in chains.jpg",
    },
    {
      id: 8,
      name: "Bruno Mars",
      type: "Pop / R&B / Funk",
      imageUrl: "/images/bruno.jpg",
    },
    {
      id: 9,
      name: "Eric Clapton",
      type: "Blues Rock / Classic Rock",
      imageUrl: "/images/eric.jpg",
    },
    {
      id: 10,
      name: "Avicii",
      type: "EDM / Progressive House",
      imageUrl: "/images/avicii.jpg",
    },
    {
      id: 11,
      name: "Mike Posner",
      type: "Pop / Hip-Hop / R&B",
      imageUrl: "/images/mike.jpg",
    },
    {
      id: 12,
      name: "A R Rahman",
      type: "World / Indian Classical / Film Score",
      imageUrl: "/images/ar.jpg",
    },
    {
      id: 13,
      name: "Oasis",
      type: "Britpop / Alternative Rock",
      imageUrl: "/images/oasis.jpg",
    },
    {
      id: 14,
      name: "Goo Goo Dolls",
      type: "Alternative Rock / Post-Grunge",
      imageUrl: "/images/gogo.jpg",
    },
    {
      id: 15,
      name: "Pearl Jam",
      type: "Grunge / Alternative Rock",
      imageUrl: "/images/pearl.jpg",
    }
  ];
  

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  export default function MusicInspirationWall() {
    return (
      <motion.div
        className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-8"
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-6xl sm:text-7xl font-bold text-center mb-16 font-serif bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
            variants={fadeInUp}
          >
            Sonic Inspirations
          </motion.h1>
  
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
            variants={staggerContainer}
          >
            {inspirations.map((item) => (
              <motion.div
                key={item.id}
                className="flex flex-col items-center"
                variants={fadeInUp}
              >
                <div className="w-full aspect-[2/3] relative rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-serif font-bold text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-purple-300 font-light">
                    {item.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <HomeButton/>
      </motion.div>
    );
  }