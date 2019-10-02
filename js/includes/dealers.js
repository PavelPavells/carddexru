app.on('init', () => {

    let $dealers = $('.dealers');

    if ($dealers.length) {
        let partnerCitiesScroll = new PerfectScrollbar('.partner__cities-list-wrapper');
        $( '.partner__cities-list-wrapper' ).on( 'mousewheel DOMMouseScroll', function ( e ) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;

            this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
            e.preventDefault();
        });
        
        let organizationsScroll = new PerfectScrollbar('.organizations');
        $( '.organizations').on( 'mousewheel DOMMouseScroll', function ( e ) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;

            this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
            e.preventDefault();
        });
    }
	

    let $testlink = $('#test-link');

    $testlink.click(ev => {
        ev.preventDefault();
        console.log($(ev.currentTarget).data('coords'));
    })
});