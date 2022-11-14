import axios from 'axios';
import { shuffleItems } from './utils/shuffleItems';

const api = 'https://api.themoviedb.org/3';

const envFile = process.env.API_KEY;

const image = 'images';

const fetchFilmImages = async (type, id) => {
	// const axios = (await import('axios')).default;
	const options = {
		method: 'GET',
		url: `${api}/${type}/${id}/${image}`,
		params: {
			api_key: envFile
		}
	};

	const { backdrops } = await axios(options).then((res) => res.data);

	const filmImages = shuffleItems(backdrops).slice(0, 10);

	return { filmImages };
};

export { fetchFilmImages };
