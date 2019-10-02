app.on('init', () => {
	$this = $('.advantages');
	if ($this.length) {
		owlCarouselFacade($this.find('.advantages__list'), {
			items: 1,
			start: 1,
			dots: false,
			responsive: {
				640:{
					items: 2
				},
				760:{
					items: 3
				},
			}
		}, ['xs', 'sm', 'md'], $this.find('.owl-arrow-left'), $this.find('.owl-arrow-right'));	
	}
});