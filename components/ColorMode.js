import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
const iconStyle = `text-slate-200 w-6 h-6`;
function ColorMode() {
	const { setTheme, resolvedTheme } = useTheme();

	return (
		// <button
		// 	aria-label="toggle color mode"
		// 	className="w-10 h-10 bg-slate-200 shadow-md  rounded-lg dark:bg-slate-600 dark:shadow-none flex items-center justify-center hover:ring-2 ring-gray-400 transition-all duration-300 focus:outline-none"
		// 	onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
		// >
		<button
			aria-label="toggle color mode"
			className="w-10 h-10  rounded-lg bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-400 transition-all duration-300 focus:outline-none"
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
		>
			{resolvedTheme === 'light' ? (
				<MoonIcon className={iconStyle} />
			) : (
				<SunIcon className={iconStyle} />
			)}
		</button>
	);
}

export default ColorMode;
