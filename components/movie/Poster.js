import Image from 'next/image';

function Poster({ backdrop_path }) {
	return (
		<div className="mt-5">
			{/* <p className="text-center text-6xl">Image</p>
			 */}
			<div className="mx-auto text-center">
				<Image
					height={281}
					width={500}
					src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
					alt="hello"
					className="shadow-xl lg:shadow-none md:shadow-none"
					priority
				/>
			</div>
		</div>
	);
}

export default Poster;
