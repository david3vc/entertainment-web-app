import MovieVideoDetailModel from "./MovieVideoDetailModel";

export default interface GetVideosModel {
    id: number;
    results: MovieVideoDetailModel[];
}