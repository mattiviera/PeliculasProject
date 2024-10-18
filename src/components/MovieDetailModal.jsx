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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">{movieDetails.Title}</h2>
                <p><strong>Año:</strong> {movieDetails.Year}</p>
                <p><strong>Director:</strong> {movieDetails.Director}</p>
                <p><strong>Género:</strong> {movieDetails.Genre}</p>
                <p><strong>Sinopsis:</strong> {movieDetails.Plot}</p>
                <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default MovieDetailModal;
