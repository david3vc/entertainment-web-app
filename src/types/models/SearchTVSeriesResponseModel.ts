import TVSerieModel from "./TVSerieModel";

export default interface SearchTVSeriesResponseModel {
	page: number;
    results: TVSerieModel[];
    total_result: number;
    total_pages: number;
}
