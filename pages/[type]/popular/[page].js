import Head from 'next/head';
import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query';
import { fetchFilm } from '../../../api/api';
import Pagination from '../../../components/filmPages/Pagination';
import FilmPages from '../../../components/filmPages/FilmPages';

function Popular({ type, page }) {
	const filmType = type === 'tv' ? 'TV Shows' : 'Movies';

	const { data } = useQuery({
		queryKey: ['films', type, page],
		queryFn: () => fetchFilm(type, page),
		keepPreviousData: true,
		refetchOnMount: type === 'tv' && true,
		enabled: false // this is to prevent auto-refetch
	});

	return (
		<>
			<Head>
				<title>{`Popular ${type}`}</title>
				<meta name="description" content="popular" />
			</Head>

			<p className="text-center text-2xl font-display mt-5">{`Popular ${filmType}, page: ${page}`}</p>
			<Pagination page={page} type={type} />
			<br />
			<div className="mx-auto container text-center">
				{data?.results?.map((film, idx) => (
					<FilmPages key={idx} film={film} type={type} />
				))}
			</div>
			<Pagination page={page} type={type} />
		</>
	);
}

export default Popular;

export const getStaticProps = async ({ params }) => {
	const queryClient = new QueryClient();
	const { type, page } = params;

	await queryClient.prefetchQuery(['films', type, page], () =>
		fetchFilm(type, page)
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
