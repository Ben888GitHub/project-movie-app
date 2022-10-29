// import { colors } from '../../utils/badgeColors';
const colors = {
	Action: 'red-700',
	Comedy: 'blue-700',
	Thriller: 'gray-700',
	Crime: 'purple-700',
	Adventure: 'green-700',
	Animation: 'orange-700',
	Drama: 'amber-700',
	Documentary: 'stale-700',
	Family: 'sky-700',
	Fantasy: 'emerald-700',
	History: 'yellow-700',
	Horror: 'black',
	Music: 'cyan-700',
	Romance: 'rose-700',
	Soap: 'lime-700',
	Reality: 'zinc-700',
	'Sci-Fi & Fantasy': 'emerald-700',
	'Action & Adventure': 'red-700',
	War: 'pink-700',
	Western: 'teal-700'
};
function Genres({ genres }) {
	console.log(genres);

	return (
		<div className="flex">
			{genres.map((genre, idx) => (
				<div key={idx}>
					<span
						className={`text-white  bg-${
							colors[genre.name]
						} text-sm font-medium mr-2 px-2.5 py-0.5 rounded focus:outline-none focus:ring-4`}
					>
						{genre.name}
					</span>
				</div>
			))}
		</div>
	);
}

export default Genres;
