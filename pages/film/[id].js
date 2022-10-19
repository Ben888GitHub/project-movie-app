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
			<div className="container mx-auto lg:max-w-6xl md:max-w-6xl mt-3 lg:mt-5 md:mt-5">
				<div className="flex flex-wrap justify-between px-4 md:px-6">
					<div>
						<p className="text-2xl md:text-4xl lg:text-4xl  font-medium">
							{id}
						</p>
						<p className="text-lg md:text-2xl lg:text-2xl font-display mt-0 md:mt-2 lg:mt-2">
							TV Series · 2018- · 30m{' '}
						</p>
					</div>

					<div>
						<p className="text-lg md:text-2xl lg:text-2xl  font-display">
							TMDB Rating{' '}
						</p>
						<p className="text-2xl md:text-3xl lg:text-3xl font-display mt-0 md:mt-2 lg:mt-2">
							9/10{' '}
						</p>
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
