import dynamic from 'next/dynamic';

const ColorMode = dynamic(() => import('./ColorMode'), { ssr: false });

function Header() {
	return (
		<>
			<nav className="bg-slate-200   border-gray-200 dark:bg-slate-700 dark:border-slate-700 px-2 py-3 w-full z-20 top-0 left-0">
				<div className="container flex flex-wrap justify-between items-center mx-auto">
					<h1 className="text-xl self-center  font-bold bg-[#E1B517] p-2 border-[#E1B517] rounded-md text-black">
						PlexPremier
					</h1>
					<main className="flex md:order-2">
						<ColorMode />
					</main>
				</div>
			</nav>
		</>
	);
}

export default Header;
