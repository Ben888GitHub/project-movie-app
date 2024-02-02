import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const FilmSwiper = ({ children, ...props }) => {
	return (
		<Swiper
			autoplay={{
				delay: 5000,
				disableOnInteraction: false
			}}
			pagination={{
				clickable: true
			}}
			{...props}
			navigation
			scrollbar={{ draggable: true }}
			lazy={true}
		>
			{children}
		</Swiper>
	);
};

export default FilmSwiper;
