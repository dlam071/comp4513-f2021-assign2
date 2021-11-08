import React from "react";
import Characters from "./Characters.js";
import DisplayPosts from "./Tabs";
import PlayDetails from "./PlayDetails";


const DetailsMain = (props) => {

  return (
    <div>

      <div className="playDetails tabs">
        <div className="synopsis">
          <h2> Synopsis:</h2>
          <p> {props.play.synopsis}</p>
          <button className="button" onClick={props.toggleReadText}>Read</button>
        </div>

        <DisplayPosts chars={props.chars} play={props.play} fileExists={props.fileExists}/>
      </div>

    </div>
  );
}


export default DetailsMain;