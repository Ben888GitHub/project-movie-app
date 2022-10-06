function WatchList() {
	return (
		<button
			type="button"
			className="text-white text-sm md:text-lg lg:text-lg px-3 h-10  focus:ring-4 focus:outline-none  font-medium rounded-lg   text-center inline-flex items-center mr-4 bg-gray-600  hover:bg-slate-700 focus:ring-slate-800"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="mr-1 -ml-1 lg:w-6 lg:h-6 md:w-6 md:h-6 w-5 h-5"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
				/>
			</svg>
			Watchlist
		</button>
	);
}

export default WatchList;
