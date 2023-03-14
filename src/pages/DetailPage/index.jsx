import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';

const DetailPage = () => {
  let { movieId } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);
      setMovie(response.data);
    }
    fetchData();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <div className="presentation" role="presentation">
      <div className="wrapper-modal">
        <div className="modal-outer"></div>

        <div className="modal">
          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="modal__poster-img"
          />

          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user-perc">100% for you</span>{' '}
              {movie.release_date ? movie.release_date : movie.first_air_date}
            </p>
            <h2 className="modal__title">
              {movie.title ? movie.title : movie.name}
            </h2>
            <p className="modal__overview">평점: {movie.vote_average}</p>
            <p className="modal__overview">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
