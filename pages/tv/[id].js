import Head from 'next/head';
import { fetchFilmById } from '../../api';
import Title from '../../components/movie/Title';

function TvShows({ id, name, vote_count }) {
	return (
		<>
			<Head>
				<title>{id}</title>
				<meta name="description" content="TV name" />
			</Head>

			<Title movieId={id} name={name} />
		</>
	);
}

export default TvShows;

export const getStaticProps = async (query) => {
	const { id } = query.params;

	const data = await fetchFilmById('tv', id);

	console.log(data);
	const { name, vote_count } = data;

	return {
		props: {
			id,
			name,
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
