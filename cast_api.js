import axios from 'axios';

const api = 'https://api.themoviedb.org/3';

const envFile = process.env.API_KEY;

const fetchFilmCast = async (type, id) => {
	const options = {
		method: 'GET',
		url: `${api}/${type}/${id}/credits`,
		params: {
			api_key: envFile
		}
	};

	const { cast } = await axios(options).then((res) => res.data);

	return { cast };
};

export { fetchFilmCast };
