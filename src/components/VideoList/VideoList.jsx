import VideoCard from "../VideoCard/VideoCard";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVidoes = videos.map((video) => {
    return (
      <VideoCard
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui divided relaxed list">{renderedVidoes}</div>;
};
export default VideoList;
