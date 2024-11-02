import React from 'react';

const VideoPlayer = ({ src, type = 'video/mp4', width = 320, height = 240 }) => (
  <video width={width} height={height} controls>
    <source src={src} type={type} />
    Your browser does not support the video tag.
  </video>
);

export default VideoPlayer;