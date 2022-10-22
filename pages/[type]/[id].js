import Head from 'next/head';
import { fetchFilmById } from '../../api';
import Poster from '../../components/movie/Poster';
import Title from '../../components/movie/Title';
import { fetchFilmImages } from '../../images_api';
// import { shuffleItems } from '../../utils/shuffleItems';

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
				<Poster backdrop_path={backdrop_path} filmName={filmName} />
			</div>
		</>
	);
}

export default Movie;

export const getStaticProps = async ({ params }) => {
	const shuffleItems = (await import('../../utils/shuffleItems')).shuffleItems;

	const { id, type } = params;

	const image = 'images';

	const { filmName, rating, filmDate, duration, backdrop_path } =
		await fetchFilmById(type, id);

	const { backdrops } = await fetchFilmImages(type, id, image);

	const filmImages = shuffleItems(backdrops).slice(0, 10);

	console.log(filmImages);

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
