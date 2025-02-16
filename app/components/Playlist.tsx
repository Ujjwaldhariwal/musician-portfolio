import Section from "./Section";
import SpotifyEmbed from "./SpotifyEmbed";

const Playlists = () => (
  <Section id="playlists" title="My Playlists">
    <SpotifyEmbed src="https://open.spotify.com/embed/playlist/2gRmNIuvTMS0VyfYqVFG7n?utm_source=generator" />
    <SpotifyEmbed src="https://open.spotify.com/embed/playlist/5iWAqqS9PEbqrgjTvNKzLe?utm_source=generator" />
  </Section>
);

export default Playlists;