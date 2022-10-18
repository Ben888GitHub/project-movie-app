import Head from 'next/head';

function Movie({ id }) {
	// const router = useRouter();
	// console.log(router.query.id);

	return (
		<>
			<Head>
				<title>{id}</title>
				<meta name="description" content="Movie name" />
			</Head>
			<div className="container mx-auto">
				<div className="md:flex lg:flex md:flex-wrap lg:flex-wrap justify-between px-4 md:px-6 py-2.5 mt-5 ">
					<div>
						<p className="text-4xl  font-medium">Cobra Kai</p>
						<p className="text-2xl font-display mt-2">
							TV Series · 2018- · 30m{' '}
						</p>
					</div>

					<div>
						<p className="text-2xl font-display">TMDB Rating </p>
						<p className="text-3xl font-display mt-2">9/10 </p>
					</div>
				</div>
			</div>
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
