import MovieModel from "./MovieModel";

export default interface SearchMovieResponseModel {
	page: number;
    results: MovieModel[];
    total_result: number;
    total_pages: number;
}
