import Image from 'next/image';
import threed from '../images/three_d.png';

function WelcomePage() {
	return (
		<div className="container bg-[url('../images/image_11_compressed.jpeg')]  mx-auto  bg-fixed ">
			<div className="backdrop-brightness-50 p-2 md:p-5 lg:p-5  md:pb-10 lg:pb-10 pb-5 text-center">
				<div className="relative h-[215px] md:h-72 lg:h-72 w-full">
					<Image
						src={threed}
						alt="Picture of the nature"
						layout="fill"
						objectFit="contain"
						priority
						placeholder="empty"
					/>
				</div>

				<p className="font-medium text-lg md:text-3xl lg:text-3xl    text-white  mt-2 ">
					WELCOME TO PLEXPREMIER
				</p>
				<button className="font-display mt-3 md:mt-5 lg:mt-5 text-white px-3 h-10  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm  text-center inline-flex items-center mr-4 bg-gray-600  hover:bg-slate-700 focus:ring-slate-800">
					ABOUT
				</button>
			</div>
		</div>
	);
}

export default WelcomePage;
