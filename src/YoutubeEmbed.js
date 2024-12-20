// A component which simply embeds a youtube video into the page
// Sourced from: https://codesandbox.io/p/sandbox/react-youtube-embed-32io4?file=%2Fsrc%2FApp.js

import React from "react";
import PropTypes from "prop-types";

// note: paddingBottom = 1 - videoHeight/videoWidth
const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive" style={{ width: '95%', margin: '0 auto', position: 'relative', paddingBottom: '46%' }}> 
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1&vq=hd1080`}
      style={{ border: 'none', position: 'absolute', top: 0, left: 0 }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube video"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
