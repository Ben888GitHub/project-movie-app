import Image from 'next/image';

function Poster({ backdrop_path, filmName, filmImages }) {
	// console.log(filmImages.slice(0, 2));

	return (
		<div className="mt-5">
			{/* <p className="text-center text-6xl">Image</p>
			 */}

			<div className="mx-auto text-center">
				{filmImages.map((gallery, idx) => (
					<Image
						key={idx}
						// priority
						// todo, remove the quality={50} if there's any issue
						quality={50}
						loading="lazy"
						height={281}
						width={500}
						src={`https://image.tmdb.org/t/p/w500${gallery.file_path}`}
						alt={gallery.file_path}
						className="shadow-xl lg:shadow-none md:shadow-none"
					/>
				))}
			</div>
		</div>
	);
}

export default Poster;
