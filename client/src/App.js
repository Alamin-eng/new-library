import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./main";

function App() {
  let videos = require("./exampleresponse.json");

  let [getVideo, setGetVideo] = useState([])

  //use effect 
  useEffect(() => {
    try{
      fetch(``)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
    }
    catch(error) {
      console.log(error)
    }
    
  })

  return (
    <div className="App">
      <h1>Video's library</h1>
      <Main data={videos} />
      <p></p>
    </div>
  );
}

export default App;
