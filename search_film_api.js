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

	// const movies = await fetch(
	//     `https://api.themoviedb.org/3/search/multi?api_key=456ec94d71f9702ddcbbc1166b40f922&language=en-US&query=${queryFilm}`
	// );
	// const moviesJson = await movies.json();
	return movies;
};

export { fetchSearchFilm };
