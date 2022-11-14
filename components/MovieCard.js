import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AddToWatchlist from './AddToWatchlist';

function MovieCard({
	tvOrMovie,
	title,
	name,
	tv_date,
	poster,
	movie_date,
	id
}) {
	const router = useRouter();

	return (
		<div className="inline-flex m-3 md:m-5 lg:m-5">
			<div className="max-w-[165px] md:max-w-xs lg:max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  ">
				{/* <Link href={`/${tvOrMovie}/${id}`} passHref> */}
				<div onClick={() => router.push(`/${tvOrMovie}/${id}`)}>
					<Image
						src={`https://image.tmdb.org/t/p/w500${poster}`}
						alt={title || name}
						width={500}
						height={750}
						// todo, remove the quality and priority if there's any issue
						// priority
						quality={50}
						loading="lazy"
						placeholder="empty"
						className="rounded-t-lg cursor-pointer relative"
					/>
				</div>
				{/* </Link> */}
				<div className="p-5 lg:mt-0 md:mt-0 -mt-2 text-left">
					<p className="mb-2 sm:text-md md:text-xl lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
						{title || name}
					</p>

					<p className="mb-3 font-display text-gray-700 dark:text-gray-400">
						{tv_date || movie_date}
					</p>
					<AddToWatchlist />
				</div>
			</div>
		</div>
	);
}

export default MovieCard;
