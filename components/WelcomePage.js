import Image from 'next/image';
import { useState } from 'react';
import threed from '../images/three_d.webp';
import SearchFilm from './searchFilm/SearchFilm';

function WelcomePage() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="bg-[url('../images/image_11_compressed.webp')]  mx-auto  bg-fixed mb-10">
				<div className="backdrop-brightness-50 p-2 md:p-5 lg:p-5  md:pb-8 lg:pb-8 pb-5 text-center">
					<div className="relative h-[215px] md:h-72 lg:h-72 w-full">
						<Image
							src={threed}
							alt="home cinema"
							layout="fill"
							objectFit="contain"
							priority
							placeholder="empty"
						/>
					</div>
					<p className="font-medium text-lg md:text-3xl lg:text-3xl    text-white  mt-2 ">
						WELCOME TO PLEXPREMIER
					</p>
					{/* todo, replace About with the Headless Search Input */}

					<button
						aria-label="toggle color mode"
						className="text-lg mx-auto w-80 h-10 mt-3 md:mt-5 lg:mt-5 text-white font-medium rounded-lg bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-400 transition-all duration-300 focus:outline-none"
						onClick={() => setOpen(true)}
					>
						Search TV Shows or Movies
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="3"
							stroke="currentColor"
							className="w-5 h-5 ml-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
							/>
						</svg>
					</button>
					{/* <SearchFilm /> */}
					{/* <div className="justify-center mx-auto align-center">
					<button className="px-3 h-10 w-72 mt-4 md:mt-5 lg:mt-5 bg-white text-gray-500 dark:bg-gray-700 dark:text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm  text-center inline-flex items-center mr-4">
						Search TV Shows or Movies
					</button>
				</div> */}
				</div>
			</div>
			<SearchFilm open={open} setOpen={setOpen} />
		</>
	);
}

export default WelcomePage;
