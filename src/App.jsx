import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieController from './controllers/MovieController';

const App = () => {
    const movieController = new MovieController();
    const [movies, setMovies] = useState([]);

    const handleSearch = async (request) => {
        const results = await movieController.handleSearch(request);
        setMovies(results || []);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-5 bg-sky-950 lg shadow-md rounded-2xl">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-10 shadow-lg">
            Busqueda de Peliculas
        </h1>
        <SearchBar onSearch={handleSearch} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {movies.map((movie) => (
            <div
                key={movie.imdbID}
                className="bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
                <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-64 object-cover rounded-md mb-3"
                />
                <h2 className="text-xl font-bold text-gray-800 mt-3">
                {movie.Title}
                </h2>
                <p className="text-gray-500">{movie.Year}</p>
            </div>
            ))}
        </div>
        </div>
    );
};

export default App;
