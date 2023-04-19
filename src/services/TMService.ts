import { SearchMovieResponseModel, SearchMultiResponseModel, SearchTVSeriesResponseModel } from '../types';
import axios, { AxiosResponse } from 'axios';
import GetTrendingResponseModel from '../types/models/GetTrendingResponseModel';

const API_KEY_TMDB = import.meta.env.VITE_API_KEY_TMDB;
const API_TMDB_URL = import.meta.env.VITE_API_TMDB_URL;

export const searchMovie = async (req: string): Promise<AxiosResponse<SearchMovieResponseModel>> =>
	await axios.get<SearchMovieResponseModel>(`${API_TMDB_URL}/search/movie?api_key=${API_KEY_TMDB}&query=${req}`);

export const searchTVSeries = async (req: string): Promise<AxiosResponse<SearchTVSeriesResponseModel>> =>
	await axios.get<SearchTVSeriesResponseModel>(`${API_TMDB_URL}/search/tv?api_key=${API_KEY_TMDB}&query=${req}`);

export const searchMulti = async (req: string): Promise<AxiosResponse<SearchMultiResponseModel>> =>
	await axios.get<SearchMultiResponseModel>(`${API_TMDB_URL}/search/multi?api_key=${API_KEY_TMDB}&query=${req}`);

export const searchTrending = async (media_type: string, time_window: string): Promise<AxiosResponse<GetTrendingResponseModel>> =>
	await axios.get<GetTrendingResponseModel>(`${API_TMDB_URL}/trending/${media_type}/${time_window}?api_key=${API_KEY_TMDB}`);