import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FilmSwiper from '../FilmSwiper';
import {
	dynamicBreakpoints,
	dynamicModules
} from '../../utils/swiperBreakpoints';

function Poster({ filmImages }) {
	return (
		<div className="mt-5">
			<FilmSwiper
				breakpoints={dynamicBreakpoints(true)}
				spaceBetween={20}
				modules={dynamicModules()}
			>
				{filmImages?.map((gallery, idx) => (
					<SwiperSlide key={idx}>
						<div className="mb-20 md:mb-12 lg:mb-12 w-400px md:w-[500px] lg:w-[500px] h-[181px] md:[h-281px] lg:h-[281px] mx-auto ">
							<div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-[181px] md:[h-281px] lg:h-[281px]">
								<Image
									quality={50}
									priority
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
			</FilmSwiper>
		</div>
	);
}

export default Poster;
