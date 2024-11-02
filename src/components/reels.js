import React from 'react';
import './ReelComponent.css';

const ReelComponent = () => {
  const reels = [
    `
      <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DBjbJG2i51J/?utm_source=ig_web_copy_link" data-instgrm-version="14"></blockquote>
      <script async src="//www.instagram.com/embed.js"></script>
    `,
    `
      <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DBbDKQ8sCzu/?utm_source=ig_web_copy_link" data-instgrm-version="14"></blockquote>
      <script async src="//www.instagram.com/embed.js"></script>
    `,
    // Add more reels here
  ];

  return (
    <div className="reel-container">
      {reels.map((reel, index) => (
        <div key={index} className="reel-item" dangerouslySetInnerHTML={{ __html: reel }} />
      ))}
    </div>
  );
};

export default ReelComponent;
