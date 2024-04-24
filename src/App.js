// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const App = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <Router>
      <div>
        <header>
          {/* Menggunakan Link untuk mengarahkan judul ke halaman awal */}
          <Link to="/" onClick={reloadPage} style={{ textDecoration: 'none', color: '#e50914', cursor: 'pointer' }}>
            <h1>My Movie App</h1>
          </Link>
        </header>
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
