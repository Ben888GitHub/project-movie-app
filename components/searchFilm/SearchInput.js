import { Combobox } from '@headlessui/react';
function SearchInput({ queryFilm, setQueryFilm, handleClearQuery }) {
	return (
		<div className="relative w-full cursor-default overflow-hidden rounded-t-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
			<Combobox.Input
				placeholder="Search TV Shows or Movies"
				className=" font-medium bg-gray-50  text-gray-900 text-md rounded-t-lg  w-full p-2.5 dark:bg-gray-600  dark:placeholder-gray-400 dark:text-white"
				displayValue={queryFilm}
				onChange={(event) => setQueryFilm(event.target.value)}
			/>

			<button
				onClick={handleClearQuery}
				className="absolute inset-y-0 right-0 flex items-center pr-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
	);
}

export default SearchInput;
