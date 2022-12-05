import Head from 'next/head';
import { fetchWatchlist } from '../../../api/watchlist_api';
import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query';
import FilmPages from '../../../components/filmPages/FilmPages';
import Link from 'next/link';

function Watchlist({ type, page }) {
	const filmType = type === 'tvshows' ? 'TV Shows' : 'Movies';

	const { data } = useQuery({
		queryKey: ['films', type, page],
		queryFn: () => fetchWatchlist(type, page),
		keepPreviousData: true,
		enabled: false // this is to prevent auto-refetch
	});

	return (
		<>
			<Head>
				<title>{`${filmType} Watchlist`}</title>
				<meta name="description" content="popular" />
			</Head>

			{/* <p className="text-center text-2xl font-display mt-5">{`Page: ${page}`}</p> */}
			<div className="flex  justify-center ">
				<Link href="/movies/watchlist/1" passHref>
					<p
						className={`${
							type === 'movies' && `font-semibold`
						} text-center text-2xl font-display mt-5 hover:underline cursor-pointer `}
					>
						Movies
					</p>
				</Link>
				<p className="text-center text-2xl font-display mt-5 ml-3 mr-3">|</p>
				<Link href="/tvshows/watchlist/1" passHref>
					<p
						className={`${
							type === 'tvshows' && `font-semibold`
						} text-center text-2xl font-display mt-5 hover:underline cursor-pointer `}
					>
						TV Shows
					</p>
				</Link>
			</div>
			<div className="mx-auto container text-center">
				{data?.results?.map((film, idx) => (
					<FilmPages key={idx} film={film} type={type} />
				))}
			</div>
		</>
	);
}

export default Watchlist;

export const getStaticProps = async ({ params }) => {
	const queryClient = new QueryClient();
	const { type, page } = params;

	await queryClient.prefetchQuery(['films', type, page], () =>
		fetchWatchlist(type, page)
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			type,
			page
		}
	};
};

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: 'blocking'
	};
};
