export default interface LastEpisodeToAirModel {
    id: number;
    name: string;
    air_date: string;
    episode_number: number;
    still_path: string | null;
    overview: string;
    production_code: string;
    season_number: number;
    vote_average: number;
    vote_count: number;
}