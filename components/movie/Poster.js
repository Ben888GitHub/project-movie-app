import Image from 'next/image';

function Poster({ backdrop_path, filmName, filmImages }) {
	// console.log(filmImages.slice(0, 2));

	return (
		<div className="mt-5 flex">
			{/* <p className="text-center text-6xl">Image</p>
			 */}
			{filmImages.slice(0, 2).map((gallery, idx) => (
				<div className="mx-auto text-center " key={idx}>
					<Image
						priority
						height={281}
						width={500}
						src={`https://image.tmdb.org/t/p/w500${gallery.file_path}`}
						alt={gallery.file_path}
						className="shadow-xl lg:shadow-none md:shadow-none"
					/>
				</div>
			))}
		</div>
	);
}

export default Poster;
