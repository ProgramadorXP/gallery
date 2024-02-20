const gallery = document.getElementById('gallery');

const carousel = (address) => {
	
	const options = {
		root: document.querySelector('.gallery__carousel'),
		rootMargin: '0px',
		threshold: 0.9, 
	};

	
	const observer = new IntersectionObserver((enters) => {
		
		const slidersVisible = enters.filter((enter) => {
			if (enter.isIntersecting === true) {
				return enter;
			}
		});

		if (address === 'previous') {
			const firstSliderVisible = slidersVisible[0];

			const indexfirstSliderVisible = enters.indexOf(firstSliderVisible);

			if (indexfirstSliderVisible >= 1) {
				enters[indexfirstSliderVisible - 1].target.scrollIntoView({
					behavior: 'smooth',
					inline: 'start',
				});
			}
		} else if (address === 'next') {
			const lastSliderVisible = slidersVisible[slidersVisible.length - 1];
			const indexlastSliderVisible = enters.indexOf(lastSliderVisible);

			if (enters.length - 1 > indexlastSliderVisible) {
				enters[indexlastSliderVisible + 1].target.scrollIntoView({
					behavior: 'smooth',
					inline: 'start',
				});
			}
		}

		gallery.querySelectorAll('.gallery__carousel-slider').forEach((slider) => {
			observer.unobserve(slider);
		});
	}, options);

	gallery.querySelectorAll('.gallery__carousel-slider').forEach((slider) => {
		observer.observe(slider);
	});
};

export default carousel;