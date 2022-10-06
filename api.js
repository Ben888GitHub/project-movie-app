import axios from 'axios';

const api = 'https://api.themoviedb.org/3';

const envFile = process.env.API_KEY;

const fetchFilm = async () => {
	const options = {
		method: 'GET',
		url: `${api}/tv/popular`,
		params: {
			api_key: envFile
		}
	};
	const data = axios(options).then((res) => res.data);
	return data;
};

export { fetchFilm };
