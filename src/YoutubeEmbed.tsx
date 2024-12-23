// A component which simply embeds a youtube video into the page
// Sourced from: https://codesandbox.io/p/sandbox/react-youtube-embed-32io4?file=%2Fsrc%2FApp.js
interface YoutubeEmbedProps {
  embedId: string;
}
const YoutubeEmbed = (props : YoutubeEmbedProps): JSX.Element => (
  <div className="video-responsive" style={{ width: '95%', margin: '0 auto', position: 'relative', paddingBottom: '51.6%' }}> 
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${props.embedId}?autoplay=0&rel=0&vq=hd1080`}
      style={{ border: 'none', position: 'absolute', top: 0, left: 0 }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube video"
    />
  </div>
);

export default YoutubeEmbed;
