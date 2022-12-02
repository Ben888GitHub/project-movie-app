import { Fragment, useState, useRef } from 'react';
import { Dialog, Transition, Combobox } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const people = [
	{ id: 1, name: 'Wade Cooper' },
	{ id: 2, name: 'Arlene Mccoy' },
	{ id: 3, name: 'Devon Webb' },
	{ id: 4, name: 'Tom Cook' },
	{ id: 5, name: 'Tanya Fox' },
	{ id: 6, name: 'Hellen Schmidt' }
];

function SearchFilm({ open, setOpen }) {
	const [queryFilm, setQueryFilm] = useState('');
	const [selected, setSelected] = useState('');
	const [query, setQuery] = useState('');
	const cancelButtonRef = useRef(null);

	const fetchFilm = async () => {
		const movies = await fetch(
			`https://api.themoviedb.org/3/search/multi?api_key=456ec94d71f9702ddcbbc1166b40f922&language=en-US&query=${queryFilm}`
		);
		const moviesJson = await movies.json();
		return moviesJson;
	};

	const { data, isLoading } = useQuery({
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

	// data && console.log(data);

	// todo, optimize this code
	const filteredFilm = data?.results
		.filter(
			(film) =>
				film.name
					?.toLowerCase()
					.replace(/\s+/g, '')
					.includes(queryFilm?.toLowerCase().replace(/\s+/g, '')) ||
				film.original_title
					?.toLowerCase()
					.replace(/\s+/g, '')
					.includes(queryFilm?.toLowerCase().replace(/\s+/g, ''))
		)
		.filter((film) => film.media_type === 'tv' || film.media_type === 'movie');

	const filteredPeople =
		query === ''
			? people
			: people.filter((person) =>
					person.name
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, ''))
			  );

	return (
		<Transition.Root show={open} appear as={Fragment}>
			<Dialog
				as="div"
				className=" relative z-10"
				// todo, optimize code below
				onClose={() => {
					setOpen(false);
					setQueryFilm('');
					setSelected('');
				}}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
					// afterLeave={() => setQueryFilm('')}
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>
				<div className="fixed inset-0 z-10 overflow-y-auto ">
					{/* <div className=" flex h-[200px] md:h-[270px] lg:h-[270px] items-end justify-center p-4 text-center sm:items-center sm:p-0"> */}
					<div className=" flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							// afterLeave={() => setQueryFilm('')}
						>
							{/* This is to adjust the Dialog size and shape */}
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
								{/* <Combobox value={selected} onChange={setSelected}> */}
								<Combobox value={selected} onChange={setSelected}>
									<Combobox.Input
										placeholder="Search TV Shows or Movies"
										className="font-medium bg-gray-50  text-gray-900 text-md rounded-t-lg  w-full p-2.5 dark:bg-gray-600  dark:placeholder-gray-400 dark:text-white"
										value={queryFilm}
										onChange={(event) => setQueryFilm(event.target.value)}
									/>
									<Transition
										// leave="transition ease-in duration-100"
										// leaveFrom="opacity-100"
										// leaveTo="opacity-0"
										afterLeave={() => setQueryFilm('')}
									>
										{queryFilm && (
											<Combobox.Options className="dark:bg-[#1a202c] max-h-60 w-full overflow-auto rounded-b-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
												{filteredFilm?.slice(0, 7).map((film, idx) => (
													<Combobox.Option
														key={idx}
														className={({ active }) =>
															`font-display relative cursor-pointer select-none py-2 pl-10 pr-4 ${
																active
																	? 'bg-teal-600 text-white'
																	: 'text-gray-900  dark:text-white'
															}`
														}
														// className="font-display  cursor-pointer  py-2 pl-10 pr-4 text-gray-900  dark:text-white"
														value={film.name || film.original_title}
														onClick={() => console.log(film)}
													>
														{film.name || film.original_title}
													</Combobox.Option>
												))}
											</Combobox.Options>
										)}
									</Transition>
								</Combobox>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}

export default SearchFilm;