import dotenv from 'dotenv';
dotenv.config();

export const API_KEY = process.env.API_KEY;

export const USER_SERVER = '/api/users';

export const API_URL = 'https://api.themoviedb.org/3/';

export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

export const UPCOMING_URL = `${API_URL}movie/upcoming?${API_KEY}&`;

export const SEARCH_URL = `${API_URL}search/movie?${API_KEY}&`;
