app.on('init', () => {
	$chronoSlider = $('.chronology__slider');
	if ($chronoSlider.length) {
		owlCarouselFacade($chronoSlider.find('.chronology__slider-list'), {
			dots: false,
			margin: 30,
			responsive: {
				0: {
					items: 1
				}, 
				640:{
					items: 2
				},
				960: {
					items: 3
				}
			}
		}, ['xs', 'sm', 'md', 'lg', 'xl', 'ml'], $chronoSlider.find('.owl-arrow-left'), $chronoSlider.find('.owl-arrow-right'), true, '.chronology__slide');
	}
});