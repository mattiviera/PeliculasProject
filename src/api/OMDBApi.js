const API_KEY = '28d20e26';

class OMDBApi {
    static async fetchMovies(query) {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&${query}`;
        try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.Response === 'True') {
            return data;
        } else {
            throw new Error(data.Error || 'Unknown error occurred');
        }
        } catch (error) {
        console.error('Error fetching movies from OMDB API:', error);
        return { Search: [] };
        }
    }

    static async fetchMovieById(imdbID) {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`;
        try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.Response === 'True') {
            return data;
        } else {
            throw new Error(data.Error || 'Error fetching movie details');
        }
        } catch (error) {
        console.error('Error fetching movie details from OMDB API:', error);
        return null;
        }
    }
}

export default OMDBApi;
