import BaseHandler from './BaseHandler';
import MovieService from '../services/MovieService';

class TitleSearchHandler extends BaseHandler {
    async handle(request) {
        if (request.type === 'title') {
            try {
                const movies = await MovieService.searchMoviesByTitle(request.query);
                return movies;
            } catch (error) {
                console.error('Error buscando por título:', error);
            }
        } else {
            return await super.handle(request);
        }
    }
}

export default TitleSearchHandler;
