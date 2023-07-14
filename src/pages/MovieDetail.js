import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./MovieDetail.css";

export const MovieDetail = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const image = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=93574b64754f18af2552b56611108823`
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    }
    fetchMovie();
  }, []);

  useEffect(() => {
    document.title = `${data.title} / Cinemate`;
  });

  return (
    <main>
      <section className="movie--detail-section">
        <div className="movie--img-box">
          <img className="movie-img" src={image} alt="Movie Poster"></img>
        </div>
        <div className="movie-description">
          <h1 className="movie-title">{data.title}</h1>
          <p>{data.overview}</p>
          {data.genres ? (
            <div className="movie-genres">
              {data.genres.map((genre) => (
                <p className="genre" key={genre.id}>
                  {genre.name}
                </p>
              ))}
            </div>
          ) : (
            ""
          )}
          <div className="votes">
            <p>{`Average rating ${data.vote_average}`}</p>
            <p>{`Rating count ${data.vote_count}`}</p>
          </div>
          <div className="details">
            <p>{`Runtime: ${data.runtime}`}</p>
            <p>{`Budget: ${data.budget}`}</p>
            <p>{`Revenue: ${data.revenue}`}</p>
            <p>{`Release Date: ${data.release_date}`}</p>
            <p>
              <span>IMDB code:</span>
              <a
                href={`https://www.imdb.com/title/${data.imdb_id}`}
                target="_blank"
                rel="noreferrer"
              >
                {data.imdb_id}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
