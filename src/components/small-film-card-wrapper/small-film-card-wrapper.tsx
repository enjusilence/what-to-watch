import React from 'react';
import SmallFilmCardStatic from '../small-fill-card-static/small-film-card-static';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardWrapperProps = {
  isActive: boolean;
  srcVideo: string;
  srcImage: string;
  title: string;
}

function SmallFilmCardWrapper({isActive, srcVideo, srcImage, title}: SmallFilmCardWrapperProps): JSX.Element {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

  React.useEffect(() =>
  {
    const timerID = setTimeout(() =>
    {if (isActive) {setIsVideoPlaying(true);}},
    1000,
    );
    return () => {
      clearTimeout(timerID);
      setIsVideoPlaying(false);
    };
  }, [isActive]);

  return (
    isVideoPlaying
      ? <VideoPlayer src={srcVideo} poster={srcImage} isMuted/>
      : <SmallFilmCardStatic src={srcImage} title={title}/>
  );
}

export default SmallFilmCardWrapper;
