import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
const style = {
	iconDark: `text-slate-700 w-6 h-6`,
	iconLight: `text-slate-200 w-6 h-6`
};
function ColorMode() {
	const { theme, setTheme, resolvedTheme } = useTheme();

	// console.log(resolvedTheme);
	console.log(theme);

	return (
		<button
			aria-label="toggle color mode"
			className="w-10 h-10 bg-white shadow-md  rounded-lg dark:bg-slate-800 dark:shadow-none flex items-center justify-center hover:ring-2 ring-gray-400 transition-all duration-300 focus:outline-none"
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
		>
			{/* {resolvedTheme === 'dark' ? 'light' : 'dark'} */}
			{resolvedTheme === 'light' ? (
				<MoonIcon className={style.iconDark} />
			) : (
				<SunIcon className={style.iconLight} />
			)}
		</button>
	);
}

export default ColorMode;
