import Image from 'next/image';
import ExportedImage from 'next-image-export-optimizer';

function Poster({ backdrop_path }) {
	return (
		<div className="mt-5">
			{/* <p className="text-center text-6xl">Image</p>
			 */}
			<div className="mx-auto text-center">
				<ExportedImage
					height={281}
					width={500}
					src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
					alt="hello"
					className="shadow-xl lg:shadow-none md:shadow-none"
					priority
					placeholder="empty"
					useWebp={process.env.nextImageExportOptimizer_storePicturesInWEBP}
				/>
			</div>
		</div>
	);
}

export default Poster;
