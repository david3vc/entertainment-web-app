import BelongsToCollectionModel from "./BelongsToCollectionModel";
import GenreModel from "./GenreModel";
import ProductionCompaniesModel from "./ProductionCompaniesModel";
import ProductionCountriesModel from "./ProductionCountriesModel";
import SpokenLanguagesModel from "./SpokenLanguagesModel";

export default interface MovieDetailModel {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollectionModel;
  budget: number;
  genres: GenreModel[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompaniesModel[];
  production_countries: ProductionCountriesModel[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguagesModel[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
