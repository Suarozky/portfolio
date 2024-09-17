import React from 'react';

const ShowSound = () => {
  return (
      <div className='w-full h-80  flex justify-center items-center p-8'>
        <iframe
            className='w-[80vh] h-full'
            src="https://open.spotify.com/embed/track/4r8lRYnoOGdEi6YyI5OC1o?utm_source=generator&theme=0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        />
    </div>
  );
};

export default ShowSound;
