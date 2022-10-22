import axios from 'axios';

const api = 'https://api.themoviedb.org/3';

const envFile = process.env.API_KEY;

const fetchFilmImages = async (type, id, image) => {
	const options = {
		method: 'GET',
		url: `${api}/${type}/${id}/${image}`,
		params: {
			api_key: envFile
		}
	};

	const { backdrops } = await axios(options).then((res) => res.data);

	console.log(backdrops.length);
	return { backdrops };
};

export { fetchFilmImages };
