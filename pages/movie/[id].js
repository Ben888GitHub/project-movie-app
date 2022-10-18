function Movie({ id }) {
	// const router = useRouter();

	// console.log(router.query.id);

	return (
		<>
			<p className="text-2xl text-center font-display">{id}</p>
		</>
	);
}

export default Movie;

export const getStaticProps = ({ params }) => {
	console.log(params.id);

	return {
		props: {
			id: params.id
		}
	};
};

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: 'blocking'
	};
};
