import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

import FilmSwiper from '../FilmSwiper';
import {
	dynamicBreakpoints,
	dynamicModules
} from '../../utils/swiperBreakpoints';

const isCast = 'cast';

function Cast({ cast }) {
	return (
		<>
			<p className="text-2xl font-medium px-4 mt-7 mb-1">Main Cast</p>
			<FilmSwiper
				breakpoints={dynamicBreakpoints()}
				spaceBetween={30}
				modules={dynamicModules(isCast)}
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
			</FilmSwiper>
		</>
	);
}

export default Cast;
