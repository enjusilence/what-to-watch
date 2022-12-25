type VideoPlayerProps = {
  src: string;
  poster: string;
  isMuted: boolean;
}

function VideoPlayer({src, poster, isMuted}: VideoPlayerProps): JSX.Element {
  return (
    <video
      src={src}
      poster={poster}
      muted={isMuted}
      width={280}
      height={175}
      autoPlay
    />
  );
}

export default VideoPlayer;
