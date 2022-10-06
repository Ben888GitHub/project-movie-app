import dynamic from 'next/dynamic';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
	return (
		<>
			<Header />

			<main>{children}</main>
			<Footer />
		</>
	);
}

export default Layout;
