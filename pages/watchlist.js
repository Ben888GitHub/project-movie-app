import Head from 'next/head';
import { fetchFilmsFromListV4 } from '../api/list_film_v4_api';
import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query';

function Watchlist() {
	const { data } = useQuery({
		queryKey: ['filmlist'],
		queryFn: fetchFilmsFromListV4,
		keepPreviousData: true,
		enabled: false
	});

	data && console.log(data);

	return (
		<>
			<Head>
				<title>{`Watchlist`}</title>
				<meta name="description" content="popular" />
			</Head>
			<p
				className={`text-center text-2xl font-display mt-5 hover:underline cursor-pointer `}
			>
				Watchlist
			</p>
		</>
	);
}

export default Watchlist;

export const getServerSideProps = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['filmlist'],
		queryFn: fetchFilmsFromListV4
	});

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	};
};
