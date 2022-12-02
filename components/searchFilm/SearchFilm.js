import { Fragment, useState, useRef } from 'react';
import { Dialog, Transition, Combobox } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import { fetchSearchFilm } from '../../search_film_api';
import Link from 'next/link';
import useFilterFilm from './useFilterFilm';

function SearchFilm({ open, setOpen }) {
	const [queryFilm, setQueryFilm] = useState('');
	const [selected, setSelected] = useState('');

	const { data, isLoading } = useQuery({
		queryKey: ['films', queryFilm],
		queryFn: () => fetchSearchFilm(queryFilm),
		enabled: Boolean(queryFilm), // this is to prevent auto-refetch
		refetchOnWindowFocus: false,
		refetchOnMount: true,
		keepPreviousData: true
	});
	const { filteredFilm } = useFilterFilm(data, queryFilm);

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
					<div className=" flex mt-52 md:mt-0 lg:mt-0 min-h-max md:min-h-full   lg:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
							<Dialog.Panel className="w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
								{/* <Combobox value={selected} onChange={setSelected}> */}
								<Combobox value={selected} onChange={setSelected}>
									<div className="relative w-full cursor-default overflow-hidden rounded-t-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
										<Combobox.Input
											placeholder="Search TV Shows or Movies"
											className=" font-medium bg-gray-50  text-gray-900 text-md rounded-t-lg  w-full p-2.5 dark:bg-gray-600  dark:placeholder-gray-400 dark:text-white"
											displayValue={queryFilm}
											onChange={(event) => setQueryFilm(event.target.value)}
										/>

										<button
											onClick={() => {
												setQueryFilm('');
												setSelected('');
											}}
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
										{/* {selected && (
											<button
												onClick={() => console.log(`Link to film`)}
												className="absolute inset-y-0 right-8 flex items-center pr-2"
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
														d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
													/>
												</svg>
											</button>
										)} */}
									</div>
									<Transition afterLeave={() => setQueryFilm('')}>
										{queryFilm && (
											<Combobox.Options className="dark:bg-[#1a202c] max-h-60 w-full overflow-auto rounded-b-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
												{isLoading ? (
													<span className="text-center">Loading...</span>
												) : (
													filteredFilm?.slice(0, 7).map((film, idx) => (
														<Link
															href={`/${film.media_type}/${film.id}`}
															key={idx}
														>
															<Combobox.Option
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
																onChange={(e) => console.log('Hello')}
															>
																{film.name || film.original_title}
															</Combobox.Option>
														</Link>
													))
												)}
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
