import React, { useEffect, useState } from 'react';
import MovieService from '../services/MovieService';

const MovieDetailModal = ({ movie, onClose }) => {
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            console.log('Fetching details for movie ID:', movie.imdbID);
            const details = await MovieService.getMovieDetails(movie.imdbID);
            console.log('Movie details response:', details);
            setMovieDetails(details);
        };

        fetchMovieDetails();
    }, [movie.imdbID]);

    if (!movieDetails) return <div>Cargando detalles...</div>;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-out">
            <div className="bg-azulado rounded-lg shadow-lg max-w-md w-full p-6 relative transition-transform transform duration-300 ease-out scale-95 hover:scale-100">
                <button
                className="absolute top-2 right-2 text-white hover:text-red-600"
                onClick={onClose}
                >
                ✕
                </button>
                
                <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">{movieDetails.Title}</h2>
                <img
                    src={movieDetails.Poster !== "N/A" ? movieDetails.Poster : "https://via.placeholder.com/300x450"}
                    alt={movieDetails.Title}
                    className="w-40 h-auto mx-auto mb-4"
                />
                <p className="text-white mb-2">
                    <span className="font-semibold">Year:</span> {movieDetails.Year}
                </p>
                <p className="text-white mb-2">
                    <span className="font-semibold">Director:</span> {movieDetails.Director}
                </p>
                <p className="text-white mb-2">
                    <span className="font-semibold">Genre:</span> {movieDetails.Genre}
                </p>
                <p className="text-white mb-2">
                    <span className="font-semibold">Plot:</span> {movieDetails.Plot}
                </p>
                </div>
            </div>
            </div>
        );
    };

export default MovieDetailModal;
