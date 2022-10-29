import { colors } from '../../utils/badgeColors';

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
