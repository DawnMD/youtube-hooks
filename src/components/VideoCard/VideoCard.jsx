import "./VideoCard.css";
const VideoCard = ({ video, onVideoSelect }) => {
  return (
    <div className="item video-card" onClick={() => onVideoSelect(video)}>
      <img
        alt={video.snippet.title}
        src={video.snippet.thumbnails.high.url}
        className="ui image"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoCard;
