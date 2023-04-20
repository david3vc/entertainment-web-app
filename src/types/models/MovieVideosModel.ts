import MovieVideoDetailModel from "./MovieVideoDetailModel";

export default interface MovieVideosModel {
    id: number;
    results: MovieVideoDetailModel[];
}