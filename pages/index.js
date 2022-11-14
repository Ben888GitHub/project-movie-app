import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense } from 'react';
import { fetchFilm } from '../api';
// import MoviesOrTv from '../components/MoviesOrTv';
import WelcomePage from '../components/WelcomePage';

const MoviesOrTv = dynamic(() => import('../components/MoviesOrTv'), {
	suspense: true
});

export default function Home({ tv, movie }) {
	return (
		<>
			<Head>
				<title>PlexPremier</title>
				<meta name="description" content="PlexPremier" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<WelcomePage />
			<Suspense
				fallback={<p className="font-display text-lg text-center">Loading</p>}
			>
				<MoviesOrTv title="movie" filmList={movie} />
			</Suspense>
			<Suspense
				fallback={<p className="font-display text-lg text-center">Loading</p>}
			>
				<MoviesOrTv title="tv" filmList={tv} />
			</Suspense>
		</>
	);
}

export const getStaticProps = async () => {
	const movie = await fetchFilm('movie', 1);

	const tv = await fetchFilm('tv', 1);

	return {
		props: { tv, movie },
		revalidate: 10
	};
};
