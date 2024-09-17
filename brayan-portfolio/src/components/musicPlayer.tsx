import React from "react";

const MusicPlayer = () => {
  return (
    <div className="music-player">
      <iframe
        src="https://open.spotify.com/embed/playlist/3zd9jApEo3aAN53JlJAUBz?utm_source=generator" // Reemplaza con tu URL de Spotify
        width="300"
        height="80"
        frameBorder="0"
        allow="encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
