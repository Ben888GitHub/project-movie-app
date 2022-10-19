import MovieCard from './MovieCard';

function MoviesOrTv({ title, filmList }) {
	return (
		<div className="container mx-auto text-center">
			<h1 className="font-display  text-3xl mt-10 md:mt-7 lg:mt-7">
				{title === 'movie' ? 'Popular Movie' : 'Popular TV'}
			</h1>

			{filmList?.results?.slice(8, 12).map((film, idx) => (
				<MovieCard
					tvOrMovie={title}
					key={idx}
					id={film.id}
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
