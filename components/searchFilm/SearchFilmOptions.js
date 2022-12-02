import { Combobox } from '@headlessui/react';
import Link from 'next/link';

function SearchFilmOptions({ film }) {
	return (
		<Link href={`/${film.media_type}/${film.id}`}>
			<Combobox.Option
				className={({ active }) =>
					`font-display relative cursor-pointer select-none py-2 pl-10 pr-4 ${
						active ? 'bg-teal-600 text-white' : 'text-gray-900  dark:text-white'
					}`
				}
				value={film.name || film.original_title}
				onClick={() => console.log(film)}
			>
				{film.name || film.original_title}
			</Combobox.Option>
		</Link>
	);
}

export default SearchFilmOptions;
