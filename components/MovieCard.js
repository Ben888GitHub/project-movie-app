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
		// use inline-flex in div, if no Carousel
		<div className="m-3 md:m-5 lg:m-5">
			<div className="mx-auto mb-10  max-w-[165px] md:max-w-xs lg:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  ">
				<Link href={`/${tvOrMovie}/${id}`} passHref>
					<div className="rounded-t-lg cursor-pointer bg-white dark:bg-gray-800">
						<Image
							quality={50}
							priority
							height={750}
							width={500}
							src={`https://image.tmdb.org/t/p/w500${poster}`}
							alt={poster}
							className="rounded-t-lg cursor-pointer relative"
						/>
					</div>
				</Link>
				<div className="p-5 lg:mt-0 md:mt-0 -mt-2 text-left">
					<p className="mb-2 sm:text-md md:text-xl lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
						{title || name}
					</p>

					<p className=" font-display text-gray-700 dark:text-gray-400">
						{tv_date || movie_date}
					</p>
				</div>
			</div>
		</div>
	);
}

export default MovieCard;
