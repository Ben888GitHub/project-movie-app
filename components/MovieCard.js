import Image from 'next/image';
import Link from 'next/link';

function MovieCard({
	tvOrMovie,
	title,
	name,
	tv_date,
	poster,
	movie_date,
	id
}) {
	return (
		<div className="inline-flex m-3 md:m-5 lg:m-5">
			<div className="max-w-[165px] md:max-w-xs lg:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  ">
				<Link href={`/${tvOrMovie}/${id}`} passHref>
					<div>
						<Image
							src={`https://image.tmdb.org/t/p/w500${poster}`}
							alt={title || name}
							width={500}
							height={750}
							// priority
							loading="lazy"
							placeholder="empty"
							className="rounded-t-lg cursor-pointer relative"
						/>
					</div>
				</Link>
				<div className="p-5 lg:mt-0 md:mt-0 -mt-2 text-left">
					<p className="mb-2 sm:text-md md:text-xl lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
						{title || name}
					</p>

					<p className="mb-3 font-display text-gray-700 dark:text-gray-400">
						{tv_date || movie_date}
					</p>
					<button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className=" mr-1 -ml-1 w-5 h-5 md:w-6  md:h-6  lg:w-6 lg:h-6 font-bold"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						Watchlist
					</button>
				</div>
			</div>
		</div>
	);
}

export default MovieCard;
