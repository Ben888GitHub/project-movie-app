function Title({
	filmName,
	tvOrMovie,
	filmDate,
	rating,
	duration,
	isOverview
}) {
	return (
		<div className="flex flex-wrap justify-between px-4 md:px-6">
			<div>
				<p className="text-xl md:text-3xl lg:text-3xl  font-medium">
					{filmName}
				</p>
				<p className="text-md md:text-2xl lg:text-2xl font-display mt-0 md:mt-2 lg:mt-2">
					{tvOrMovie === 'movie' ? 'Movie' : 'TV Shows'} · {filmDate} ·{' '}
					{duration}m
				</p>
			</div>

			<div className="lg:mt-0 md:mt-0 ">
				<p className="text-lg md:text-2xl lg:text-2xl  font-display">
					TMDB Rating:
				</p>

				<div className="flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="dark:drop-shadow-none drop-shadow-sm w-5 h-5 md:w-8 md:h-8 lg:w-8 lg:h-8 mt-0 md:mt-2 lg:mt-2 mr-0.5 fill-[#F6C934] "
					>
						<path
							fillRule="evenodd"
							d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
							clipRule="evenodd"
						/>
					</svg>
					<p className="text-md md:text-3xl lg:text-3xl font-display mt-0 md:mt-2 lg:mt-2">
						{rating}/10{' '}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Title;
