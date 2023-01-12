import { FC, useRef, useState } from 'react';
import { FilmItem } from '../../types/film-item';
import { VideoPlayerControls } from '../video-player-controls/video-player-controls';

type VideoPlayerProps = {
  filmInfo: FilmItem;
};

export const VideoPlayer: FC<VideoPlayerProps> = ({filmInfo: {name, videoLink, previewImage}}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const [videoProgress, setVideoProgress] = useState(0);

  const handleProgress = ({currentTarget : {currentTime}}: React.SyntheticEvent<HTMLVideoElement>) => {
    setVideoProgress(currentTime);
  };


  return (
    <div ref={playerRef} className="player">
      <video ref={videoRef} onTimeUpdate={(e) => handleProgress(e)} src={videoLink} className="player__video" poster={previewImage}/>
      {(videoRef.current !== null && playerRef.current !== null
        && <VideoPlayerControls videoRef={videoRef.current} playerRef={playerRef.current} name={name} videoProgress={videoProgress}/>)}
    </div>
  );
};
