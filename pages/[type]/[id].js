import Head from 'next/head';
import { fetchFilmById } from '../../api';
import { fetchFilmImages } from '../../api/images_api';
import { fetchFilmCast } from '../../api/cast_api';
import Poster from '../../components/film/Poster';
import Title from '../../components/film/Title';
import Overview from '../../components/film/Overview';
import Genres from '../../components/film/Genres';
import AddToWatchlist from '../../components/AddToWatchlist';
import Cast from '../../components/film/Cast';

function Movie({
	id,
	filmName,
	type,
	filmDate,
	rating,
	duration,
	cast,
	filmImages,
	isOverview,
	genres
}) {
	return (
		<>
			<Head>
				<title>{filmName}</title>
				<meta name="description" content="film" />
			</Head>
			<div className="container mx-auto lg:max-w-6xl md:max-w-6xl mt-3 lg:mt-5 md:mt-5">
				<Title
					movieId={id}
					filmName={filmName}
					tvOrMovie={type}
					filmDate={filmDate}
					rating={rating}
					duration={duration}
				/>

				<Poster filmImages={filmImages} />

				<Overview isOverview={isOverview} />

				<div className="flex-none md:flex lg:flex">
					<div>
						<Genres genres={genres} />
					</div>
					<div className="ml-5 mt-4 lg:ml-auto md:ml-auto lg:-mt-2 md:-mt-2  ">
						<AddToWatchlist />
					</div>
				</div>
				<Cast cast={cast} />
			</div>
		</>
	);
}

export default Movie;

export const getStaticProps = async ({ params }) => {
	const { id, type } = params;

	const {
		filmName,
		rating,
		filmDate,
		duration,
		backdrop_path,
		isOverview,
		genres
	} = await fetchFilmById(type, id);

	const { filmImages } = await fetchFilmImages(type, id);

	const { cast } = await fetchFilmCast(type, id);

	return {
		props: {
			id,
			filmName,
			rating,
			filmDate,
			type,
			duration,
			backdrop_path,
			isOverview,
			genres,
			filmImages,
			cast: cast.slice(0, 15)
		},
		revalidate: 10
	};
};

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: 'blocking'
	};
};
