import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieController from './controllers/MovieController';
import MovieDetailModal from './components/MovieDetailModal';

const App = () => {
    const movieController = new MovieController();
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleSearch = async (request) => {
        const results = await movieController.handleSearch(request);
        setMovies(results || []);
    };

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie); 
    };

    const closeModal = () => {
        setSelectedMovie(null); 
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-5 bg-sky-950 lg shadow-md rounded-2xl">
            <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-10 shadow-lg">
                Búsqueda de Películas
            </h1>
            <SearchBar onSearch={handleSearch} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {movies.map((movie) => (
                    <div
                        key={movie.imdbID}
                        className="bg-white shadow-lg rounded-lg p-4 cursor-pointer"
                        onClick={() => handleMovieClick(movie)} 
                        ><img
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

            {/* Modal de detalle de la película */}
            {selectedMovie && (
                <MovieDetailModal movie={selectedMovie} onClose={closeModal} />
            )}
        </div>
    );
};

export default App;
