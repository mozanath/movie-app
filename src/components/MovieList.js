import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../services/api';
import SearchBar from './SearchBar';
import StarRating from './StarRating';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filter, setFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('/movie/popular');
      setMovies(response.data.results);
      setFilteredMovies(response.data.results);
    };

    fetchMovies();
  }, []);

  const handleSearch = (query, genreFilter) => {
    setSearchQuery(query);
    setFilter(genreFilter); // Set the genre filter

    const filtered = movies.filter((movie) => {
      const titleMatches = movie.title.toLowerCase().includes(query.toLowerCase());
      const genreMatches =
        genreFilter === '' || // Check if the genre filter is empty or matches the movie's genre
        (movie.genres && movie.genres.some((genre) => genre.name.toLowerCase() === genreFilter.toLowerCase()));
      return titleMatches && genreMatches;
    });

    setFilteredMovies(filtered);
  };

  return (
    <div>
      <h2>Popular Movies</h2>
      <SearchBar onSearch={handleSearch} onFilterChange={(filter) => setFilter(filter)} />
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <span className="movie-title">{movie.title}</span>
            </Link>
            <StarRating initialValue={null} onRate={(value) => console.log(value)} />
          </li>
        ))}
        {searchQuery && filteredMovies.length === 0 && (
          <p>No movies found for '{searchQuery}'</p>
        )}
      </ul>
    </div>
  );
};

export default MovieList;