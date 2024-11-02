import React, { useEffect } from 'react';

const InstagramReelEmbed = ({ embedCode }) => {
  useEffect(() => {
    const embedScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');

    if (!embedScript) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div
      className="instagram-embed"
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  );
};

export default InstagramReelEmbed;
