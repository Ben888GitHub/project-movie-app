import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

function Cast({ cast }) {
	console.log(cast);

	return (
		<>
			<p className="text-2xl font-medium px-4 mt-7 mb-1">Main Cast</p>

			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={30}
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
						slidesPerView: 5,
						spaceBetween: 10
					},
					1025: {
						slidesPerView: 5,
						spaceBetween: 0
					}
				}}
				navigation
				scrollbar={{ draggable: true }}
				lazy={true}
			>
				{cast?.map((actor, idx) => (
					<SwiperSlide key={idx}>
						<div className="mx-auto mb-10">
							<div className="text-center m-3 md:m-3 lg:m-3">
								<Image
									src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
									alt={actor.original_name}
									width={256}
									height={384}
									quality={50}
									priority
									placeholder="empty"
									className="mx-auto rounded-lg"
								/>
							</div>
							<p className="text-md font-display text-center">
								{actor.original_name}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export default Cast;
