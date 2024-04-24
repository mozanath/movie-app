import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api';
import StarRating from './StarRating'; 

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [userRating, setUserRating] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const response = await axios.get(`/movie/${id}`);
      setMovie(response.data);
    };

    fetchMovieDetail();
  }, [id]);

  const handleRate = (value) => {
    setUserRating(value);
  };

  return (
    <div>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
          <p>{movie.overview}</p>
          <StarRating initialValue={userRating} onRate={handleRate} />
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
