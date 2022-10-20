import axios from 'axios';

const api = 'https://api.themoviedb.org/3';

const envFile = process.env.API_KEY;

const fetchFilm = async (title, page) => {
	const film = title === 'tv' ? 'tv' : 'movie';

	const options = {
		method: 'GET',
		url: `${api}/${film}/popular`,
		params: {
			api_key: envFile,
			page: page
		}
	};
	const data = axios(options).then((res) => res.data);
	return data;
};

const fetchFilmById = async (type, id) => {
	const options = {
		method: 'GET',
		url: `${api}/${type}/${id}`,
		params: {
			api_key: envFile
		}
	};
	const data = await axios(options).then((res) => res.data);

	const { title, name, vote_average, release_date, first_air_date } = data;

	const filmName = type === 'movie' ? title : name;

	const filmDate = type === 'movie' ? release_date : first_air_date;

	const rating = Number(vote_average).toFixed(1);

	return {
		filmName,
		rating,
		filmDate
	};
};

export { fetchFilm, fetchFilmById };
