import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense } from 'react';
import { fetchFilm } from '../api';
// import MoviesOrTv from '../components/MoviesOrTv';
import WelcomePage from '../components/WelcomePage';
const MoviesOrTv = dynamic(() => import('../components/MoviesOrTv'), {
	suspend: true
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
				fallback={
					<p className="text-center text-lg font-display text-black dark:text-white">
						Loading movie...
					</p>
				}
			>
				<MoviesOrTv title="movie" filmList={movie} />
			</Suspense>

			<Suspense
				fallback={
					<p className="text-center text-lg font-display text-black dark:text-white">
						Loading tv...
					</p>
				}
			>
				<MoviesOrTv title="tv" filmList={tv} />
			</Suspense>
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
