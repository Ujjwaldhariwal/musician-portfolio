"use client";
import NavBar from "./NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Music from "./components/Music";
import Playlists from "./components/Playlist";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-pink-50">
      <NavBar />
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Music />
        <Playlists />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
