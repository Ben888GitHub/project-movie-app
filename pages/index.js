import Head from 'next/head';
import { fetchFilm } from '../api';

import MoviesOrTv from '../components/MoviesOrTv';

import WelcomePage from '../components/WelcomePage';

export default function Home({ movies, tv }) {
	return (
		<>
			<Head>
				<title>PlexPremier</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<WelcomePage />

			<MoviesOrTv title="movie" filmList={movies} />

			<MoviesOrTv title="tv" filmList={tv} />
		</>
	);
}

export const getStaticProps = async () => {
	const movies = await fetchFilm('movie', 1);

	const tv = await fetchFilm('tv', 1);

	return {
		props: { movies, tv },
		revalidate: 10
	};
};
