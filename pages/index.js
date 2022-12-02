import Head from 'next/head';
import { fetchFilm } from '../api/api';
import MoviesOrTv from '../components/MoviesOrTv';
import WelcomePage from '../components/WelcomePage';

export default function Home({ tv, movie }) {
	return (
		<>
			<Head>
				<title>PlexPremier</title>
				<meta name="description" content="PlexPremier" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<WelcomePage />

			<MoviesOrTv title="movie" filmList={movie} />

			<MoviesOrTv title="tv" filmList={tv} />
		</>
	);
}

export const getStaticProps = async () => {
	const movieData = fetchFilm('movie', 1);

	const tvData = fetchFilm('tv', 1);

	const [movie, tv] = await Promise.all([movieData, tvData]);

	return {
		props: { tv, movie },
		revalidate: 10
	};
};
