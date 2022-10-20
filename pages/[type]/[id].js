import Head from 'next/head';
import { fetchFilmById } from '../../api';
import Title from '../../components/movie/Title';

function Movie({ id, filmName, type, filmDate, rating, duration }) {
	return (
		<>
			<Head>
				<title>{filmName}</title>
				<meta name="description" content="TV name" />
			</Head>

			<Title
				movieId={id}
				filmName={filmName}
				tvOrMovie={type}
				filmDate={filmDate}
				rating={rating}
				duration={duration}
			/>
		</>
	);
}

export default Movie;

export const getStaticProps = async ({ params }) => {
	const { id, type } = params;

	const { filmName, rating, filmDate, duration } = await fetchFilmById(
		type,
		id
	);

	return {
		props: {
			id,
			filmName,
			rating,
			filmDate,
			type,
			duration
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
