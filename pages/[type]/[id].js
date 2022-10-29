import Head from 'next/head';
import { fetchFilmById } from '../../api';
import { fetchFilmImages } from '../../images_api';
import Poster from '../../components/movie/Poster';
import Title from '../../components/movie/Title';
import Overview from '../../components/movie/Overview';
import Genres from '../../components/movie/Genres';

function Movie({
	id,
	filmName,
	type,
	filmDate,
	rating,
	duration,
	backdrop_path,
	filmImages,
	isOverview,
	genres
}) {
	return (
		<>
			<Head>
				<title>{filmName}</title>
				<meta name="description" content="TV name" />
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
				<Genres genres={genres} />
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

	// console.log(genresBadges);

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
			filmImages
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
