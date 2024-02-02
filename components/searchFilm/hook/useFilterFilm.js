/**
 * Filters the given data based on the queryFilm string to return only films that match.
 *
 * @param {Object} data - The data to filter. Should have a results array property.
 * @param {string} queryFilm - The search query string to match films against.
 * @returns {Object} An object with a filteredFilm array property containing the matching films.
 */
function useFilterFilm(data, queryFilm) {
	const filteredVal = data?.results.filter((film) => {
		const { name, original_title, media_type } = film;
		let tvOrMovie = name || original_title;

		return tvOrMovie
			?.toLowerCase()
			.replace(/\s+/g, '')
			.includes(queryFilm?.toLowerCase().replace(/\s+/g, ''));
	});

	const filteredFilm = filteredVal?.filter(
		(film) => film.media_type === 'tv' || film.media_type === 'movie'
	);

	return {
		filteredFilm
	};
}

export default useFilterFilm;
