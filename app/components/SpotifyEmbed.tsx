const SpotifyEmbed: React.FC<{ src: string }> = ({ src }) => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <iframe
        className="w-full rounded-xl"
        src={src}
        height="352"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
  
  export default SpotifyEmbed;