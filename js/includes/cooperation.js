app.on('init', () => {
	let $coop = $('.cooperation');
	if ($coop.length) {
		let coopTabs = new Tabs($('.coop-tab'), $('.cooperation__item'), 'active-tab');
	};
});