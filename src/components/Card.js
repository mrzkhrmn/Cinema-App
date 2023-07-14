import React from "react";
import { Link } from "react-router-dom";
import Backup from "../assets/backup.jpg";

import "./Card.css";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className="card-box">
      <Link to={`/movie/${id}`}>
        <img
          className="movie-img"
          src={poster_path ? image : Backup}
          alt="Movie Image"
        />
      </Link>
      <div>
        <Link to={`/movie/${id}`}>
          <h1 className="movie-title">{original_title}</h1>
        </Link>
        <p className="movie-description">{overview}</p>
      </div>
    </div>
  );
};
