import React, {useEffect} from "react"; 



const VideoList = ({videos, videoChosen}) => {

    useEffect(()=>{
        videoChosen(videos[0])
    },[videos])
 
    return(
        <div className="list">
            {
                videos&& 
                videos.map((video, index) => (
                  <div key={index}
                    onClick={() => videoChosen(video)}
                  >
                        <img className="img" style={{objectFit: "fill"}}
                           src={video.snippet.thumbnails.high.url}
                           alt = {video.snippet.title}
                        />
                        <p className="p">{video.snippet.title}</p>
                  </div>
                ))
                
            }
        </div>
    )
}


export default VideoList;