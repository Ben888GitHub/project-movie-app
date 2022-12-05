const api = 'https://api.themoviedb.org/4';

const envFile = process.env.API_KEY;

const account_id = 12651286;

const list_id = 8230530;

const access_token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1MjcxMDMxIiwic2NvcGVzIjpbImFwaV9yZWFkIiwiYXBpX3dyaXRlIl0sInZlcnNpb24iOjEsInN1YiI6IjYyYTIxMTgxZGMxY2I0MmYxMWVmOWFjZCIsIm5iZiI6MTY3MDI1MzQ2OCwiYXVkIjoiNDU2ZWM5NGQ3MWY5NzAyZGRjYmJjMTE2NmI0MGY5MjIifQ.fl97HE6AgxHBJ034gI4ln5DD4Q67Kkopaet0PInx804';

const page = 1;

const language = 'en';

const sort_by = 'title.asc';

const fetchFilmsFromListV4 = async () => {
	const axios = (await import('axios')).default;
	const options = {
		method: 'GET',
		url: `${api}/list/${list_id}`,
		// params: {
		// 	api_key: '456ec94d71f9702ddcbbc1166b40f922',
		// 	// access_token: access_token,
		// 	page,
		// 	sort_by
		// },
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1MjcxMDMxIiwic2NvcGVzIjpbImFwaV9yZWFkIiwiYXBpX3dyaXRlIl0sInZlcnNpb24iOjEsInN1YiI6IjYyYTIxMTgxZGMxY2I0MmYxMWVmOWFjZCIsIm5iZiI6MTY3MDI1MzQ2OCwiYXVkIjoiNDU2ZWM5NGQ3MWY5NzAyZGRjYmJjMTE2NmI0MGY5MjIifQ.fl97HE6AgxHBJ034gI4ln5DD4Q67Kkopaet0PInx804',
			'Content-Type': 'application/json;charset=utf-8'
		}
	};
	console.log(options);

	const data = await axios
		.request(options)
		.then((res) => res.data)
		.catch(() => `No Watchlisted ${film} found`);

	// console.log(data);

	return data;
};

export { fetchFilmsFromListV4 };
