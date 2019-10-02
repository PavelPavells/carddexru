app.on('init', () => {
	$company = $('.company');
	if ($company.length) {
		$videoBtn = $('#video-play-btn');
		$video = $('#video');
		$videoBtn.click(function () {
			$video.get(0).play();
			$videoBtn.css('display', 'none');
		})

		$('.company__slider').css('display', 'block');
		owlCarouselFacade($company.find('.company__slider-list'), {
			dots: false,
			margin: 0,
			items: 1
		}, ['xs', 'sm', 'md', 'lg', 'xl', 'ml'], $company.find('.owl-arrow-left'), $company.find('.owl-arrow-right'), true, '.company__slide');
	}
})