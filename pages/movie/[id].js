import { useRouter } from 'next/router';

function Movie() {
	const router = useRouter();

	// console.log(router.query.id);

	return (
		<>
			<p className="text-2xl text-center font-display">{router?.query.id}</p>
		</>
	);
}

export default Movie;
