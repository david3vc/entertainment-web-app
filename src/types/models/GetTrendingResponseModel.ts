import MovieModel from "./MovieModel";
import TVSerieModel from "./TVSerieModel";

export default interface GetTrendingResponseModel {
	page: number;
    results: (MovieModel | TVSerieModel)[];
    total_result: number;
    total_pages: number;
}
