const VideoPlay = ({video}) => {
     


    return(
        <div>
              { 
              video==null ? <h1>Loading .... </h1> : (
                <div className="play">
                <iframe title={video.snippet.title} width="85%" height="415px" src={`https://www.youtube.com/embed/${video.id.videoId}`} ></iframe>
                <h3>Title :: {video.snippet.title}</h3>
                </div>
              )

              }
        </div>
    )
}

export default VideoPlay;