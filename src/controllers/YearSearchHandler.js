import BaseHandler from './BaseHandler';
import MovieService from '../services/MovieService';

class YearSearchHandler extends BaseHandler {
    async handle(request) {
        if (request.type === 'year') {
            try {
                const movies = await MovieService.searchMoviesByYear(request.query);
                return movies;
            } catch (error) {
                console.error('Error buscando por año:', error);
            }
        } else {
            return await super.handle(request);
        }
    }
}

export default YearSearchHandler;
