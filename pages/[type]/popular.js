import Head from 'next/head';

function Popular({ type }) {
	return (
		<>
			<Head>
				<title>{`Popular ${type}`}</title>
				<meta name="description" content={`Popular ${type}`} />
			</Head>

			<p className="text-center text-xl font-display">Popular {type}</p>
		</>
	);
}

export default Popular;

export const getStaticProps = async ({ params }) => {
	const { type } = params;

	return {
		props: {
			type
		}
	};
};

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: 'blocking'
	};
};
