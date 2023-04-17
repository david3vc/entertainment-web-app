import MovieModel from "./MovieModel";
import TVSerieModel from "./TVSerieModel";

export default interface PersonModel {
	profile_path: string | null;
    adult: boolean;
    id: number;
    media_type: string;
    known_for: MovieModel | TVSerieModel;
    name: string;
    popularity: number;
}