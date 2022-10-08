function MoviesOrTv({ title, filmList }) {
	// console.log(films);
	// todo if films are movies display movie data, else display tv data

	return (
		<div className="container mx-auto">
			<div className="m-7">
				<h1 className="font-display  text-3xl">
					{title === 'movie' ? 'Popular Movie' : 'Popular TV'}
				</h1>
				{filmList?.results?.slice(15, 20).map((film, idx) => (
					<h2 className="p-3" key={idx}>
						{film.original_title || film.original_name}
					</h2>
				))}
			</div>
		</div>
	);
}

export default MoviesOrTv;
