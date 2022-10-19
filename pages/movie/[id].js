import Head from 'next/head';
import { fetchFilmById } from '../../api';
import Title from '../../components/movie/Title';

function Movie({ id, title, vote_count }) {
	return (
		<>
			<Head>
				<title>{id}</title>
				<meta name="description" content="Movie name" />
			</Head>

			<Title movieId={id} title={title} />
		</>
	);
}

export default Movie;

export const getStaticProps = async (query) => {
	const { id } = query.params;

	const data = await fetchFilmById('movie', id);

	console.log(data);
	const { title, vote_count } = data;

	return {
		props: {
			id,
			title,
			vote_count
		}
	};
};

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: 'blocking'
	};
};
