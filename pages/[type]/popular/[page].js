import Head from 'next/head';
import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query';
import { fetchFilm } from '../../../api/api';
import Pagination from '../../../components/filmPages/Pagination';
import FilmPages from '../../../components/filmPages/FilmPages';
import { useRouter } from 'next/router';

function Popular() {
	const router = useRouter();

	const { type, page } = router.query;

	const filmType = type === 'tv' ? 'TV Shows' : 'Movies';

	const { data } = useQuery({
		queryKey: ['films', type, page],
		queryFn: () => fetchFilm(type, page),
		keepPreviousData: false,
		enabled: false // this is to prevent auto-refetch
	});

	router && console.log(router);
	// console.log(data);
	data && console.log(data?.results);

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
