import { Fragment, useState } from 'react';
import { Dialog, Transition, Combobox } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import { fetchSearchFilm } from '../../api/search_film_api';
import useFilterFilm from './hook/useFilterFilm';
import SearchInput from './SearchInput';
import SearchFilmOptions from './SearchFilmOptions';

function SearchFilm({ open, setOpen }) {
	const [queryFilm, setQueryFilm] = useState(''); // search input value for <SearchInput/> component
	const [selected, setSelected] = useState(''); // selected film for <SearchFilmOptions/> component

	// 1) Fetch the data in CSR mode
	const { data, isLoading } = useQuery({
		queryKey: ['films', queryFilm],
		queryFn: () => fetchSearchFilm(queryFilm),
		enabled: Boolean(queryFilm), // this is to prevent auto-refetch
		refetchOnWindowFocus: false,
		refetchOnMount: true,
		keepPreviousData: true
	});

	// 2) searched film data will be filtered based on queryFilm first before displaying
	const { filteredFilm } = useFilterFilm(data, queryFilm);

	const handleCloseModal = () => {
		setOpen(false);
		setQueryFilm('');
		setSelected('');
	};

	const handleClearQuery = () => {
		setQueryFilm('');
		setSelected('');
	};

	return (
		<Transition.Root show={open} appear as={Fragment}>
			<Dialog as="div" className=" relative z-10" onClose={handleCloseModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-100"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>
				<div className="fixed inset-0 z-10 overflow-y-auto ">
					<div className=" flex mt-52 md:mt-0 lg:mt-0 min-h-max md:min-h-full   lg:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-100"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-100"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							{/* This is to adjust the Dialog size and shape */}
							<Dialog.Panel className="w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
								<Combobox value={selected} onChange={setSelected}>
									<SearchInput
										queryFilm={queryFilm}
										setQueryFilm={setQueryFilm}
										handleClearQuery={handleClearQuery}
									/>
									<Transition afterLeave={() => setQueryFilm('')}>
										{queryFilm && (
											<Combobox.Options className="dark:bg-[#1a202c] max-h-60 w-full overflow-auto rounded-b-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
												{isLoading ? (
													<span className="text-center font-display">
														Loading...
													</span>
												) : (
													filteredFilm
														?.slice(0, 7)
														.map((film, idx) => (
															<SearchFilmOptions key={idx} film={film} />
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
