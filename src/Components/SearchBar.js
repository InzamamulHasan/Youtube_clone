import React, {useState, useEffect} from "react";
import youtube from "./YoutubeApi";
import {FaYoutube,FaSistrix} from "react-icons/fa"


const SearchBar = ({addVideos}) => {
    const [searchTerm,setSearchTerm] = useState("React Tutorials")
     
    useEffect(()=>{
        YoutubeVideos() ;
    },[])


    function keyDownHandler(event){
      if(event.key==='Enter'){
        YoutubeVideos()
      }
    }

    function YoutubeVideos(){

        youtube.get("/search",{
          params:{
            q: searchTerm,
            type: "video",
            part:"snippet",
            maxResults:10,
          }
        })
        .then((response) => addVideos(response.data.items))
        .catch((error) => console.log(error))
  
      }

    return(
        <div className="head">
             <div className="d">
             <FaYoutube className="ic"/>
              <h2>Youtube</h2>

             </div>
              <div className="g">
                <input type="text" placeholder="Search" 
                  onChange={e => setSearchTerm(e.target.value)} 
                  value = {searchTerm} onKeyDown={keyDownHandler}
                 />
                <button onClick={YoutubeVideos}> < FaSistrix className="ser"/></button>
               
              </div>
             <div>
              <img alt="hjkh" className="elon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-WnTWOz6gOHtphyhISpLzEpXpNmzshaGQBQ&usqp=CAU"/>
             </div>
              
            
      
            
        </div>
    )
    
}



export default SearchBar;