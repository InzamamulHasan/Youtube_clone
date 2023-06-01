import React,{useState} from "react";
// import youtube from "./apis/youtube.js" 
import SearchBar from "./Components/SearchBar";

import VideoList from "./Components/Videolist";

import VideoPlay from "./Components/VideoPlay";
import "./App.css"



const App = () => {
    const [videos,setVideos] = useState([])

    const [selectedVideo, setSelectedVideo] = useState(null)

  
  return(
    <div>
           
          <SearchBar addVideos={setVideos} />

          <div className="vid" style={{display: "flex"}}>
                <div style={{width: "70vw"}}>
                      <VideoPlay video={selectedVideo} />
                </div>

                <div style={{width: "30vw"}}>
                      <VideoList videos={videos} videoChosen={setSelectedVideo} />
                </div>
          </div>




           
    </div>
  )
}

export default App;