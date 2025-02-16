import Section from "./Section";
import SpotifyEmbed from "./SpotifyEmbed";

const Music = () => (
  <Section id="music" title="My Music">
    <SpotifyEmbed src="https://open.spotify.com/embed/album/2ImIQKCRRa8c1yb7YHm7mi?utm_source=generator" />
  </Section>
);

export default Music;