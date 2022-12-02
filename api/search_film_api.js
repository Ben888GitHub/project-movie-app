const api = 'https://api.themoviedb.org/3';

const envFile = process.env.API_KEY;

const fetchSearchFilm = async (queryFilm) => {
	const axios = (await import('axios')).default;

	const options = {
		method: 'GET',
		url: `${api}/search/multi`,
		params: {
			api_key: envFile,
			language: 'en-US',
			query: queryFilm
		}
	};

	const movies = await axios(options).then((res) => res.data);

	return movies;
};

export { fetchSearchFilm };
