import React from 'react';
import videoSource from '../asset/video.mp4';


const VideoBackground = () => {
    return (
      <div className=" fixed top-0 left-0 right-0 bottom-0 h-full w-full -z-10">
        <video autoPlay muted loop>
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
    );
  };

export default VideoBackground