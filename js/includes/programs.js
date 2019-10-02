app.on('init', () => {
	$programSlider = $('.programs__slider');
	if ($programSlider.length) {
		owlCarouselFacade($programSlider.find('.programs__slider-list'), {
			items: 1,
			dots: true,
			margin: 30,
			autoplay: true,
			loop: true,
			autoplayTimeout: 2500
		},
		['xs', 'sm', 'md', 'lg', 'xl', 'ml'], $programSlider.find('.owl-arrow-left'), $programSlider.find('.owl-arrow-right'));
	};

	$uiBlock = $('.ui');
	if ( $uiBlock.length ) {
		$('.ui__pics>ul').each(function () {
			$(this).lightGallery();
		})
	}
});