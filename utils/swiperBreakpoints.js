// * dynamic breakpoints for each page
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
export const dynamicBreakpoints = (poster) => {
	return {
		300: {
			slidesPerView: poster ? 1 : 2,
			spaceBetween: 10
		},
		640: {
			slidesPerView: poster ? 1 : 2,
			spaceBetween: 20
		},
		768: {
			slidesPerView: poster ? 1 : 2,
			spaceBetween: 40
		},
		1024: {
			slidesPerView: poster ? 1 : 5,
			spaceBetween: 10
		},
		1025: {
			slidesPerView: poster ? 2 : 5,
			spaceBetween: 0
		}
	};
};

export const dynamicModules = (cast) => {
	if (cast) {
		return [Navigation, Pagination, Scrollbar, A11y];
	} else {
		return [Navigation, Pagination, Scrollbar, A11y, Autoplay];
	}
};
