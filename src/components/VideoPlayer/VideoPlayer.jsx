const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="ui embed">
        <iframe
          title="Video Player"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="">{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoPlayer;
