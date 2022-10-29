import dynamic from 'next/dynamic';
import { colors } from '../../utils/badgeColors';

function Genres({ genres }) {
	console.log(genres);

	// console.log(getBadgeColors(genres.name));
	// console.log(colors['Action']);

	return (
		<div className="flex">
			{genres.map((genre, idx) => (
				<span
					key={idx}
					className={`${
						colors[genre.name]
					} text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded`}
				>
					{genre.name}
				</span>
			))}
		</div>
	);
}

export default Genres;
{
	/* <p className="mr-5" key={idx}>
					{genre.name}
				</p> */
}
