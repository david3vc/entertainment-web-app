import { SearchMovieResponseModel } from '../types';
// import { API_TMDB_URL } from './base';
import axios, { AxiosResponse } from 'axios';

const API_KEY_TMDB = import.meta.env.VITE_API_KEY_TMDB;
const API_TMDB_URL = import.meta.env.VITE_API_TMDB_URL;

export const searchMovie = async (req: string): Promise<AxiosResponse<SearchMovieResponseModel[]>> =>
	await axios.get<SearchMovieResponseModel[]>(`${API_TMDB_URL}/search/movie?api_key=${API_KEY_TMDB}&query=${req}`);

export const searchMulti = async (req: string): Promise<AxiosResponse<SearchMovieResponseModel>> =>
	await axios.get<SearchMovieResponseModel>(`${API_TMDB_URL}/search/multi?api_key=${API_KEY_TMDB}&query=${req}`);