import Head from 'next/head';
import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query';
import { fetchFilm } from '../../../api';
import Link from 'next/link';
import AddToWatchlist from '../../../components/AddToWatchlist';
import Image from 'next/image';

function Popular({ type, page }) {
	const filmType = type === 'tv' ? 'TV Shows' : 'Movies';

	const { data } = useQuery({
		queryKey: ['films', type, page],
		queryFn: () => fetchFilm(type, page),
		keepPreviousData: true
	});

	// data && console.log(data);

	return (
		<>
			<Head>
				<title>{`Popular ${type}`}</title>
				<meta name="description" content="popular" />
			</Head>

			<p className="text-center text-2xl font-display mt-5">{`Popular ${filmType}, page: ${page}`}</p>
			<div className="flex  justify-center mt-5">
				<button
					disabled={Number(page) === 1}
					className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
				>
					<Link
						href={{
							pathname: `/[type]/popular/[page]`,
							query: {
								type,
								page: Number(page) === 1 ? 1 : Number(page) - 1
							}
						}}
						passHref
					>
						<div className="flex">
							<svg
								aria-hidden="true"
								className="w-5 h-5 mr-2"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
									clipRule="evenodd"
								></path>
							</svg>
							Previous
						</div>
					</Link>
				</button>
				<button
					disabled={Number(page) === 40}
					className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
				>
					<Link
						href={{
							pathname: `/[type]/popular/[page]`,
							query: {
								type,
								page: Number(page) === 40 ? 40 : Number(page) + 1
							}
						}}
						passHref
					>
						<div className="flex">
							Next
							<svg
								aria-hidden="true"
								className="w-5 h-5 ml-2"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
					</Link>
				</button>
			</div>
			<br />
			<div className="mx-auto container text-center">
				{data?.map((film, idx) => (
					<div key={idx} className="inline-flex m-3 md:m-5 lg:m-5">
						<div className="max-w-[165px] md:max-w-xs lg:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  ">
							<Link href={`/${type}/${film.id}`} passHref>
								<div>
									<Image
										src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
										alt={film.original_title || film.original_name}
										width={500}
										height={750}
										quality={50}
										loading="lazy"
										placeholder="empty"
										className="rounded-t-lg cursor-pointer relative"
									/>
								</div>
							</Link>
							<div className="p-5 lg:mt-0 md:mt-0 -mt-2 text-left">
								<p className="mb-2 sm:text-md md:text-xl lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
									{film.original_title || film.original_name}
								</p>
								<p className="mb-3 font-display text-gray-700 dark:text-gray-400">
									{film.first_air_date || film.release_date}
								</p>
								<AddToWatchlist />
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex  justify-center mt-5">
				<button
					disabled={Number(page) === 1}
					className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
				>
					<Link
						href={{
							pathname: `/[type]/popular/[page]`,
							query: {
								type,
								page: Number(page) === 1 ? 1 : Number(page) - 1
							}
						}}
						passHref
					>
						<div className="flex">
							<svg
								aria-hidden="true"
								className="w-5 h-5 mr-2"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
									clipRule="evenodd"
								></path>
							</svg>
							Previous
						</div>
					</Link>
				</button>
				<button
					disabled={Number(page) === 40}
					className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
				>
					<Link
						href={{
							pathname: `/[type]/popular/[page]`,
							query: {
								type,
								page: Number(page) === 40 ? 40 : Number(page) + 1
							}
						}}
						passHref
					>
						<div className="flex">
							Next
							<svg
								aria-hidden="true"
								className="w-5 h-5 ml-2"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
					</Link>
				</button>
			</div>
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
