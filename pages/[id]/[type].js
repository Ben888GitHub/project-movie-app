import Head from 'next/head';
import { fetchFilmById } from '../../api';
import Title from '../../components/movie/Title';

function AboutID({ id, filmType }) {
	return (
		<>
			<Head>
				<title>{filmType}</title>
				<meta name="description" content="TV name" />
			</Head>

			<Title movieId={id} filmType={filmType} />
		</>
	);
}

export default AboutID;

export const getStaticProps = async ({ params }) => {
	const { id, type } = params;

	const data = await fetchFilmById(type, id);

	const { title, name, vote_count } = data;

	const filmType = type === 'movie' ? title : name;

	return {
		props: {
			id,
			filmType,
			vote_count
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
