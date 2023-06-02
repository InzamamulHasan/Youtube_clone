const VideoPlay = ({video}) => {
     


    return(
        <div>
              { 
              video==null ? <h1>Loading .... </h1> : (
                <div className="play">
                <iframe title={video.snippet.title} width="85%" height="415px" src={`https://www.youtube.com/embed/${video.id.videoId}`} ></iframe>
                <p><span>Title :: </span>{video.snippet.title}</p>
                <p> 📺 {video.snippet.channelTitle}</p>
                <p><span>Description  ::  </span>{video.snippet.description}</p>
                </div>
              )

              }
        </div>
    )
}

export default VideoPlay;