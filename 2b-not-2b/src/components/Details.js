import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../styles/Details.css";
import Favorites from "./Favorites";
import DetailsMain from "./DetailsMain";
import DetailsText from "./DetailsText";
import Heart from "./Heart";

const Details = (props) => {
  const [text, setText] = useState([]);
  const [chars, setChars] = useState([]);
  const [info, setInfo] = useState([]);
  const [fileExists, setFileExists] = useState(false);

  const [heartStyle, setHeartStyle] = useState("favoriteHeartOutline");

  const updateHeartClassName = () => {
    if (heartStyle === "favoriteHeartOutline") {
      setHeartStyle("favoriteHeartSolid");
    } else {
      setHeartStyle("favoriteHeartOutline");
    }
  };

  useEffect(() => {
    let filename = props.play.filename;
    if (filename) {
      setFileExists(true);
      filename = filename.substring(0, filename.lastIndexOf(".")); //removes the .json extension in the filename
      const url =
        "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=" +
        filename;

      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setText(data.acts);
          setChars(data.persona);
          setInfo(data);
        });
    } else {
      setFileExists(false);
    }
  }, []);

  const [favoriteCollapse, setFavoriteCollapse] = useState("expandFavs");
  const [readText, setReadText] = useState(false);

  const toggleReadText = () => {
    if (!readText) {
      setReadText(true);
      console.log("true");
    } else {
      setReadText(false);
      console.log("false");
    }
  };

  const handleClickRead = () => {
    if (!readText) {
      return (
        <DetailsMain
          play={props.play}
          chars={chars}
          fileExists={fileExists}
          toggleReadText={toggleReadText}
        />
      );
    } else {
      return (
        <DetailsText
          play={props.play}
          toggleReadText={toggleReadText}
          text={text}
          info={info}
        />
      );
    }
  };

  return (
    <section className={"playDetails " + props.favoriteCollapse}>
      <Header />
      <section className="title">
        <Heart
          play={props.play}
          updateFavorites={props.updateFavorites}
          favoriteStatus={heartStyle}
          favorites={props.favorites}
          updateHeartClassName={updateHeartClassName}
        />
        <h2>{props.play.title}</h2>
      </section>
      <Favorites
        updateFavorites={props.updateFavorites}
        favorites={props.favorites}
        plays={props.plays}
        favoriteCollapse={props.favoriteCollapse}
        setFavoriteCollapse={props.setFavoriteCollapse}
      />
      {handleClickRead()}
    </section>
  );
};

export default Details;
