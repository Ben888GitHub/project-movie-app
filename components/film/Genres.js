import { badgeStyleColors } from '../../utils/badgeColors';

function Genres({ genres }) {
	return (
		<div className="flex -mt-1 ml-5">
			{genres?.map((genre, idx) => (
				<div key={idx}>
					<span
						className={`text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded focus:outline-none focus:ring-4`}
						style={{ background: badgeStyleColors[genre.name] }}
					>
						{genre.name}
					</span>
				</div>
			))}
		</div>
	);
}

export default Genres;
