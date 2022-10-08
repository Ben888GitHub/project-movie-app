import MovieCard from './MovieCard';

function MoviesOrTv({ title, filmList }) {
	// console.log(films);
	// todo if films are movies display movie data, else display tv data

	return (
		<div className="container mx-auto text-center">
			<h1 className="font-display  text-3xl mt-10 md:mt-7 lg:mt-7">
				{title === 'movie' ? 'Popular Movie' : 'Popular TV'}
			</h1>

			{/* {filmList?.results?.slice(15, 20).map((film, idx) => (
					<h2 className="p-3 font-display" key={idx}>
						{film.original_title || film.original_name}
					</h2>
				))} */}
			{filmList?.results?.slice(15, 19).map((film, idx) => (
				<MovieCard
					key={idx}
					title={film.original_title}
					name={film.original_name}
					tv_date={film.first_air_date}
					movie_date={film.release_date}
					poster={film.poster_path}
				/>
			))}
		</div>
	);
}

export default MoviesOrTv;
