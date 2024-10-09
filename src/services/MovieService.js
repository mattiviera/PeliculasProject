import OMDBApi from '../api/OMDBApi';

class MovieService {
    static async searchMoviesByTitle(title) {
        const response = await OMDBApi.fetchMovies(`s=${title}`);
        return response.Search || [];
    }

    static async searchMoviesByYear(year) {
        const response = await OMDBApi.fetchMovies(`s=movie&y=${year}`);
        return response.Search || [];
    }

    static async searchMoviesByDirector(director) {
        const response = await OMDBApi.fetchMovies(`s=movie`);
        if (response.Search) {
        const detailedMovies = await Promise.all(
            response.Search.map(async (movie) => {
            const movieDetails = await OMDBApi.fetchMovieById(movie.imdbID);
            return movieDetails;
            })
        );

        return detailedMovies.filter(movie => movie && movie.Director && movie.Director.toLowerCase().includes(director.toLowerCase()));
        }
        return [];
    }
}

export default MovieService;
