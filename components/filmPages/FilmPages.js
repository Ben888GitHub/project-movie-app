import Image from 'next/image';
import Link from 'next/link';
import AddToWatchlist from '../AddToWatchlist';

function FilmPages({ film, type }) {
	return (
		<div className="inline-flex m-3 md:m-5 lg:m-5">
			<div className="max-w-[165px] md:max-w-xs lg:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  ">
				<Link href={`/${type}/${film.id}`} passHref>
					<div>
						<Image
							src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
							alt={film.original_title || film.original_name}
							width={500}
							height={750}
							quality={50}
							// loading="lazy"
							priority
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
	);
}

export default FilmPages;
