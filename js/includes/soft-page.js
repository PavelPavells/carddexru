app.on('init', () => {

	let $soft = $('.soft-page');
	if ($soft.length) {
		let softTabs = new Tabs($('.soft-tab'), $('.soft-page__item'), 'active-tab')
	}

	let $docsTogglers = $('.downloads-heading');
	$docsTogglers.each(function(i) {
		$(this).on("click", function() {
			$(this).parent('.downloads-cat').toggleClass('active');
		});
	})
});