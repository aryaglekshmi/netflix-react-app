import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY, IMAGE_URL } from "../../Constants/Constants";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US'`)
      .then((response) => {
        const movieList = response.data.results;
        setMovie(movieList[Math.floor(Math.random() * movieList.length)]);
      });
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? IMAGE_URL + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h1 className="title">{movie?.title} </h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie?.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
