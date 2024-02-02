import MovieCard from './MovieCard';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FilmSwiper from './FilmSwiper';
import { dynamicBreakpoints, dynamicModules } from '../utils/swiperBreakpoints';

function MoviesOrTv({ title, filmList }) {
	return (
		<div className="container mx-auto text-center">
			<Link href={`/${title}/popular/${1}`} passHref>
				<p className="no-underline hover:underline cursor-pointer font-display  text-3xl mt-10 md:mt-7 lg:mt-7">
					{title === 'movie' ? 'Popular Movies' : 'Popular TV Shows'}
				</p>
			</Link>
			<FilmSwiper
				breakpoints={dynamicBreakpoints()}
				spaceBetween={0}
				modules={dynamicModules()}
			>
				{filmList?.results.slice(0, 12).map((film, idx) => (
					<SwiperSlide key={idx}>
						<MovieCard
							tvOrMovie={title}
							id={film.id}
							title={film.original_title}
							name={film.original_name}
							tv_date={film.first_air_date}
							movie_date={film.release_date}
							poster={film.poster_path}
						/>
					</SwiperSlide>
				))}
			</FilmSwiper>
		</div>
	);
}

export default MoviesOrTv;
