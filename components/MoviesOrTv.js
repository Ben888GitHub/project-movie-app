import MovieCard from './MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function MoviesOrTv({ title, filmList }) {
	return (
		<div className="container mx-auto text-center">
			<h1 className="font-display  text-3xl mt-10 md:mt-7 lg:mt-7">
				{title === 'movie' ? 'Popular Movie' : 'Popular TV'}
			</h1>

			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
				spaceBetween={0}
				//todo
				// enable autoplay on Image with Next Links
				// can cause slower for Lighthouse to run audit
				// as it prefetch new data every 5 or given seconds
				autoplay={{
					delay: 5000,
					disableOnInteraction: false
				}}
				pagination={{
					clickable: true
				}}
				breakpoints={{
					300: {
						slidesPerView: 2,
						spaceBetween: 10
					},
					640: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 40
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 10
					},
					1025: {
						slidesPerView: 4,
						spaceBetween: 0
					}
				}}
				navigation
				scrollbar={{ draggable: true }}
				lazy={true}
			>
				{filmList.slice(0, 12).map((film, idx) => (
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
			</Swiper>
		</div>
	);
}

export default MoviesOrTv;
