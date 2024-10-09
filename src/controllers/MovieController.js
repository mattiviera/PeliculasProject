import TitleSearchHandler from './TitleSearchHandler';
import YearSearchHandler from './YearSearchHandler';
import DirectorSearchHandler from './DirectorSearchHandler';

class MovieController {
    constructor() {
        this.titleSearchHandler = new TitleSearchHandler();
        const yearSearchHandler = new YearSearchHandler();
        const directorSearchHandler = new DirectorSearchHandler();

        this.titleSearchHandler.setNextHandler(yearSearchHandler).setNextHandler(directorSearchHandler);
    }

    async handleSearch(request) {
        return await this.titleSearchHandler.handle(request);
    }
}

export default MovieController;
