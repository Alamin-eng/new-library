import React from "react";
import LikeButtons from "./like";

function Main({data, searchInput, updateRating, deleteVideo}){
    const dataManipulation = data
    
    .sort((a,b) => {
      return  a.rating > b.rating ? -1 : b.rating > a.rating ? 1 : 0
    })
    return(
       <main className="main">
            {dataManipulation.map((e) =>{
                const videoId = e.url.split('v=')[1]
                console.log(videoId)
                return(
                    <div className="map-div p-2 border shadow">
                    <div className="iframeAndDeletebutton-div">
                       {(e.url === 'blocked' ? 'Link is broken, Please watch another video' 
                       : <iframe className="embed-responsive-item p-2"  src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" allowfullscreen></iframe>)} 
                        <button type="button" class="btn btn-warning col-3" onClick={(event)=> deleteVideo(event, e.id)}>Delete</button>
                    </div>
                    
                    
                    </div>
                    
                )
                
            })}
            
       </main>
    );
}

export default Main;