import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type VideoPlayerControlsProps = {
  videoRef: HTMLVideoElement;
  playerRef: HTMLDivElement;
  name: string;
  videoProgress: number;
};

export const VideoPlayerControls: FC<VideoPlayerControlsProps> = ({videoRef, playerRef, name, videoProgress}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(!videoRef.paused);
  const {duration} = videoRef;

  const navigate = useNavigate();
  const handleExit = () => {
    navigate(-1);
  };

  const handlePlayPause = () => {
    if (isVideoPlaying) {
      videoRef.pause();
    } else {videoRef.play();}
    setIsVideoPlaying(!isVideoPlaying);
  };

  const handleProgresBarClick = ({currentTarget: {offsetWidth : max}, nativeEvent: {offsetX : x}}: React.MouseEvent<HTMLProgressElement>) => {
    videoRef.currentTime = (x / max * duration);
  };

  const handleFullScreen = () => {
    document.fullscreenElement === null
      ? playerRef.requestFullscreen()
      : document.exitFullscreen();
  };

  const getProgressPercent = (progressInSec: number): number => progressInSec / duration * 100;

  const getTimeLeft = (progressInSec: number): string => {
    const hours = Math.floor((duration - progressInSec) / 3600);
    const minutes = Math.floor(((duration - progressInSec) % 3600) / 60);
    const seconds = Math.ceil(((duration - progressInSec) % 3600) % 60);
    const hourString = (hours > 0 ? `0${hours}:` : '');
    const minuteString = (minutes >= 10 ? `${minutes}:` : `0${minutes}:`);
    const secondString = (seconds >= 10 ? `${seconds}` : `0${seconds}`);
    return '-'.concat(hourString, minuteString, secondString);
  };

  useEffect(() => {
    videoRef.play();
    setIsVideoPlaying(true);
  }, []);

  return (
    <>
      <button onClick={handleExit} type="button" className="player__exit">
        Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress onClick={(e) => handleProgresBarClick(e)} className="player__progress" value={getProgressPercent(videoProgress)} max={100} />
            <div className="player__toggler" style={{ left: `${getProgressPercent(videoProgress)}%` }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{getTimeLeft(videoProgress)}</div>
        </div>
        <div className="player__controls-row">
          <button onClick={handlePlayPause} type="button" className="player__play">
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref={(isVideoPlaying ? '#pause' : '#play-s')} />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>
          <button onClick={handleFullScreen} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </>
  );
};
