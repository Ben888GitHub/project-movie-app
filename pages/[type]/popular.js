function Popular({ type }) {
	return (
		<>
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
