import axios from 'axios';

const api = 'https://api.themoviedb.org/3';

const envFile = process.env.API_KEY;

const account_id = 12651286;

const session_id = '1cb859812ef11c6e5b665186c9720231f2f6a29d';

const fetchWatchlist = async (type, page) => {
	const film = type === 'tvshows' ? 'tv' : 'movies';

	const options = {
		method: 'GET',
		url: `${api}/account/${account_id}/watchlist/${film}`,
		params: {
			api_key: envFile,
			session_id,
			page
		}
	};

	console.log(options);

	const data = await axios(options)
		.then((res) => res.data)
		.catch(() => `No Watchlisted ${film} found`);
	console.log(data);

	return data;
};

const handleAddToWatchlist = async (type, id) => {
	const film = type === 'tvshows' ? 'tv' : 'movie';

	const options = {
		method: 'POST',
		url: `${api}/account/${account_id}/watchlist`,
		body: {
			media_type: film,
			media_id: id,
			watchlist: true
		}
	};

	const data = await axios(options)
		.then((res) => res.data)
		.catch(() => `No Watchlisted ${film} found`);
	console.log(data);
	return data;
};

export { fetchWatchlist, handleAddToWatchlist };
