import BaseHandler from './BaseHandler';
import MovieService from '../services/MovieService';

class DirectorSearchHandler extends BaseHandler {
    async handle(request) {
        if (request.type === 'director') {
            try {
                const movies = await MovieService.searchMoviesByDirector(request.query);
                return movies;
            } catch (error) {
                console.error('Error buscando por director:', error);
            }
        } else {
            return await super.handle(request);
        }
    }
}

export default DirectorSearchHandler;
