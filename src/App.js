// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div>
        <header>
          <h1 style={{ color: '#e50914', textAlign: 'center' }}>My Movie App</h1>
        </header>
        <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
          <SearchBar onSearch={handleSearch} />
        </nav>
        <div className="movie-list-container">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
