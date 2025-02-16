"use client";

import React, { useState, useEffect } from "react";
import { motion} from "framer-motion";
import { Guitar, Compass, Home } from "lucide-react";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "My Journey", icon: Compass, path: "/MusicalJourney" },
    { name: "My Inspirations", icon: Guitar, path: "/Inspirations" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full z-50 px-6 py-4"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="max-w-4xl mx-auto relative"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg" />

        <div className="relative flex justify-between items-center p-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                setActiveTab(index);
                router.push(item.path);
              }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="mb-1"
                >
                  <item.icon
                    size={24}
                    className={`${
                      activeTab === index ? "text-purple-600" : "text-gray-600"
                    }`}
                  />
                </motion.div>

                <div className="relative">
                  <span
                    className={`text-sm ${
                      activeTab === index ? "text-purple-600" : "text-gray-600"
                    }`}
                  >
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeTab === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {hoveredItem === index && (
                <motion.div
                  className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-purple-100 rounded-lg -z-10"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NavBar;