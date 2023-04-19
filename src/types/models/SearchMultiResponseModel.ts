import MovieModel from "./MovieModel";
import PersonModel from "./PersonModel";
import TVSerieModel from "./TVSerieModel";

export default interface SearchMultiResponseModel {
	page: number;
    results?: (MovieModel | TVSerieModel | PersonModel)[];
    total_result: number;
    total_pages: number;
}
