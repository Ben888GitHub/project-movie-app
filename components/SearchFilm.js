import { Fragment, useState, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';

function SearchFilm({ open, setOpen }) {
	const [queryFilm, setQueryFilm] = useState('');
	const cancelButtonRef = useRef(null);

	const fetchFilm = async () => {
		const movies = await fetch(
			`https://api.themoviedb.org/3/search/multi?api_key=456ec94d71f9702ddcbbc1166b40f922&language=en-US&query=${queryFilm}`
		);
		const moviesJson = await movies.json();
		return moviesJson;
	};

	const { data } = useQuery({
		queryKey: ['films', queryFilm],
		queryFn: () => fetchFilm(queryFilm),
		enabled: Boolean(queryFilm), // this is to prevent auto-refetch
		refetchOnWindowFocus: false,
		refetchOnMount: true,
		keepPreviousData: true
	});

	// const filteredFilm = data?.results
	// 	.filter(
	// 		(film) =>
	// 			film.name?.toLowerCase().includes(queryFilm.toLowerCase()) ||
	// 			film.original_title?.toLowerCase().includes(queryFilm.toLowerCase())
	// 	)
	// 	.slice(0, 10)
	// 	.map((film) => (
	// 		<Combobox.Option key={film.id} value={film.name || film.original_title}>
	// 			{film.name || film.original_title}
	// 		</Combobox.Option>
	// 	));

	return (
		<Transition.Root show={open} appear as={Fragment}>
			<Dialog
				as="div"
				className=" relative z-10"
				initialFocus={cancelButtonRef}
				onClose={() => setOpen(false)}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>
				<div className="fixed inset-0 z-10 overflow-y-auto ">
					<div className=" flex h-[200px] md:h-[270px] lg:h-[270px] items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							{/* This is to adjust the Dialog size and shape */}
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
								<div className="bg-white dark:bg-[#2D3748] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
									<div className=" sm:items-start">
										<div className="mt-3 sm:mt-0 sm:text-left">
											<Dialog.Title
												as="h3"
												className=" text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4"
											>
												Search TV Shows or Movies
											</Dialog.Title>
										</div>
										<button
											ref={cancelButtonRef}
											type="button"
											className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
											onClick={() => setOpen(false)}
										>
											Cancel
										</button>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}

export default SearchFilm;
