import { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  fallbackImage?: string;
  className?: string;
  controls?: boolean; 
}

export const VideoPlayer = ({
  src,
  poster,
  fallbackImage = '/default-poster.jpg',
  className = '',
  controls = true,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const initPlayer = () => {
      if (videoRef.current && !error) {
        playerRef.current = videojs(videoRef.current, {
          autoplay: true,
          muted: false,
          loop: true,
          controls,
          responsive: true,
          fill: true,
          poster: poster || fallbackImage,
          sources: [{
            src,
            type: getVideoType(src),
          }],
          controlBar: {
    
            children: [
              'playToggle',
              'volumePanel',
              'currentTimeDisplay',
              'progressControl',
              'remainingTimeDisplay',
              'fullscreenToggle',
            ],
          },
        }).on('error', () => {
          setError(true);
        });
      }
    };

    initPlayer();

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [src, poster, error, fallbackImage, controls]); 

  const getVideoType = (url: string) => {
    const extension = url.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'mp4': return 'video/mp4';
      case 'webm': return 'video/webm';
      case 'ogg': return 'video/ogg';
      default: return 'video/mp4';
    }
  };

  if (error) {
    return (
      <div className={`relative w-full h-screen overflow-hidden ${className}`}>
        <img 
          src={poster || fallbackImage} 
          alt="Video fallback"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-50/20 backdrop-blur-[1px]" />
      </div>
    );
  }

  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-primary-50/20 z-10 pointer-events-none" />
      <div data-vjs-player>
        <video
          ref={videoRef}
          className="video-js vjs-big-play-centered absolute inset-0 w-full h-full object-cover"
          poster={poster || fallbackImage}
        />
      </div>
    </div>
  );
};