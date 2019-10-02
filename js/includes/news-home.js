app.on('init', () => {
	$this = $('.new-items')
	if($this.length){
		owlCarouselFacade($this.find('.new-items__list'), {
			items: 1,
			start: 1,
			dots: false,
			responsive: {
				750:{
					items: 2
				}
			}

		}, ['xs', 'sm', 'md'], $this.find('.pag__left'), $this.find('.pag__right'));	
	}
})