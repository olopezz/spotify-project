import React from "react";
import { Carousel } from "antd";

const SongCarousel = ({ tracks }) => {
  const trackToJSX = (trackJSON) => {
    return (
      <div key={trackJSON.id}>
        <iframe
          src={`https://open.spotify.com/embed/track/${trackJSON.id}?utm_source=generator`}
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    );
  };

  return (
    <Carousel dotPosition="top">
      {tracks.map(trackToJSX)}
    </Carousel>
  );
};

export default SongCarousel;
