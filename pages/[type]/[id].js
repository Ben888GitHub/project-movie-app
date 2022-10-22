import Head from 'next/head';
import { fetchFilmById } from '../../api';
import Poster from '../../components/movie/Poster';
import Title from '../../components/movie/Title';

function Movie({
	id,
	filmName,
	type,
	filmDate,
	rating,
	duration,
	backdrop_path
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
				<Poster backdrop_path={backdrop_path} />
			</div>
		</>
	);
}

export default Movie;

export const getStaticProps = async ({ params }) => {
	const { id, type } = params;

	const image = 'images';

	const { filmName, rating, filmDate, duration, backdrop_path } =
		await fetchFilmById(type, id);

	console.log(backdrop_path);

	return {
		props: {
			id,
			filmName,
			rating,
			filmDate,
			type,
			duration,
			backdrop_path
			// backdrops
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
