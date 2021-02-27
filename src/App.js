import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoList from "./components/VideoList/VideoList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import youtube from "./apis/youtube";
const App = () => {
  const [videos, setVideos] = useState([]);
  const [clickedVid, setClickedVid] = useState(null);
  useEffect(() => {
    onYoutubeSearch("cyberpunk");
  }, []);
  const onVideoSelect = (video) => {
    setClickedVid(video);
  };
  const onYoutubeSearch = async (query) => {
    const res = await youtube.get("/search", {
      params: {
        q: query,
      },
    });
    setVideos(res.data.items);
    setClickedVid(res.data.items[0]);
  };
  return (
    <div className="ui container">
      <SearchBar onSearch={onYoutubeSearch} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoPlayer video={clickedVid} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
