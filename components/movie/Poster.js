import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Poster({ filmImages }) {
	return (
		<div className="mt-5">
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
				spaceBetween={20}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false
				}}
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
				// lazy={true}
			>
				{filmImages.map((gallery, idx) => (
					<SwiperSlide key={idx}>
						<div className="mb-20 md:mb-12 lg:mb-12 w-400px md:w-[500px] lg:w-[500px] h-[181px] md:[h-281px] lg:h-[281px] mx-auto ">
							<div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-[181px] md:[h-281px] lg:h-[281px]">
								<Image
									quality={50}
									loading="lazy"
									// priority
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
		</div>
	);
}

export default Poster;
