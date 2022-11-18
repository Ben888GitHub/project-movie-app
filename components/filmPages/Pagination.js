import Link from 'next/link';

function Pagination({ page, type }) {
	return (
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
	);
}

export default Pagination;
