type VideoPlayerMiniProps = {
  src: string;
  poster: string;
  isMuted: boolean;
}

function VideoPlayerMini({src, poster, isMuted}: VideoPlayerMiniProps): JSX.Element {
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

export default VideoPlayerMini;
