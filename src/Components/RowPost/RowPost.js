import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, IMAGE_URL } from "../../Constants/Constants";
import Youtube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [youtubeUrlId, setYoutubeUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response?.data?.results);
      })
      .catch((err) => alert("Network error !"));
  }, []);

  const handleMovieClick = (id) => {
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response?.data?.results?.length) {
          setYoutubeUrlId(response.data.results[0]);
        } else {
          alert("No video available !");
        }
      })
      .catch((err) => {
        alert("Network error !");
      });
  };

  const youtubeVideoOpts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleMovieClick(movie.id)}
            src={`${IMAGE_URL + movie.backdrop_path}`}
            alt="Posters"
            className={props.isSmall ? "small_poster" : "poster"}
          />
        ))}
      </div>
      {youtubeUrlId && (
        <Youtube opts={youtubeVideoOpts} videoId={youtubeUrlId.key} />
      )}
    </div>
  );
}

export default RowPost;
