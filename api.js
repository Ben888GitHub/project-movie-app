import axios from 'axios';

const api = 'https://api.themoviedb.org/3';

const envFile = process.env.API_KEY;

const fetchFilm = async (title) => {
	const film = title === 'tv' ? 'tv' : 'movie';

	const options = {
		method: 'GET',
		url: `${api}/${film}/popular`,
		params: {
			api_key: envFile,
			page: 1
		}
	};
	const data = axios(options).then((res) => res.data);
	return data;
};

export { fetchFilm };
