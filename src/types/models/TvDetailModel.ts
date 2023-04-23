import CreatedByModel from "./CreatedByModel";
import GenreModel from "./GenreModel";
import LastEpisodeToAirModel from "./LastEpisodeToAirModel";
import NetworksModel from "./NetworksModel";
import ProductionCompaniesModel from "./ProductionCompaniesModel";
import ProductionCountriesModel from "./ProductionCountriesModel";
import SeasonModel from "./SeasonModel";
import SpokenLanguagesModel from "./SpokenLanguagesModel";

export default interface TvDetailModel {
    backdrop_path: string;
    created_by: CreatedByModel[];
    episode_run_time: number[];
    first_air_date: string;
    genres: GenreModel[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: LastEpisodeToAirModel;
    name: string;
    next_episode_to_air: null;
    networks: NetworksModel;
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompaniesModel[];
    production_countries: ProductionCountriesModel[];
    seasons: SeasonModel[];
    spoken_languages: SpokenLanguagesModel[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
}