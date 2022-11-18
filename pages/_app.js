import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';
import '../styles/globals.css';
import {
	QueryClient,
	QueryClientProvider,
	Hydrate
} from '@tanstack/react-query';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
						refetchOnMount: false
					}
				}
			})
	);

	return (
		<ThemeProvider defaultTheme="system" attribute="class">
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Hydrate>
			</QueryClientProvider>
		</ThemeProvider>
	);
}

export default MyApp;
