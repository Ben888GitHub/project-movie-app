import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Poster({ backdrop_path, filmName, filmImages }) {
	// console.log(filmImages.slice(0, 2));

	return (
		<div className="mt-5">
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				// slidesPerView={1}
				spaceBetween={20}
				pagination={{
					clickable: true
				}}
				breakpoints={{
					300: {
						slidesPerView: 1,
						spaceBetween: 10
					},
					640: {
						slidesPerView: 1,
						spaceBetween: 20
					},
					768: {
						slidesPerView: 1,
						spaceBetween: 40
					},
					1024: {
						slidesPerView: 1,
						spaceBetween: 10
					},
					1025: {
						slidesPerView: 2,
						spaceBetween: 0
					}
				}}
				navigation
				scrollbar={{ draggable: true }}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{filmImages.map((gallery, idx) => (
					<SwiperSlide key={idx}>
						<div className="w-[500px] mx-auto ">
							<div className="mb-10 h-[281px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
								<Image
									// priority
									// todo, remove the quality={50} if there's any issue
									quality={50}
									loading="lazy"
									height={281}
									width={500}
									src={`https://image.tmdb.org/t/p/w500${gallery.file_path}`}
									alt={gallery.file_path}
									className="shadow-xl lg:shadow-none md:shadow-none"
								/>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* <div className="mx-auto text-center">
				{filmImages.map((gallery, idx) => (
					<Image
						key={idx}
						// priority
						// todo, remove the quality={50} if there's any issue
						quality={50}
						loading="lazy"
						height={281}
						width={500}
						src={`https://image.tmdb.org/t/p/w500${gallery.file_path}`}
						alt={gallery.file_path}
						className="shadow-xl lg:shadow-none md:shadow-none"
					/>
				))}
			</div> */}
		</div>
	);
}

export default Poster;
