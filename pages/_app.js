import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';
import { disableReactDevTools } from '../disableReactDevTools';
import '../styles/globals.css';

if (process.env.NODE_ENV === 'production') disableReactDevTools();

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider defaultTheme="system" attribute="class">
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
