app.on('init', () => {

	let mobileMenuScroll = new PerfectScrollbar('.mobile__menu-wrapper');
	// $( '.mobile__menu-wrapper' ).on( 'mousewheel DOMMouseScroll', function ( e ) {
 //        var e0 = e.originalEvent,
 //            delta = e0.wheelDelta || -e0.detail;

 //        this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
 //        e.preventDefault();
 //    });


   	let mobileCategoryScroll = new PerfectScrollbar('.mobile__cat-wrapper');
	// $( '.mobile__cat-wrapper' ).on( 'mousewheel DOMMouseScroll', function ( e ) {
 //        var e0 = e.originalEvent,
 //            delta = e0.wheelDelta || -e0.detail;

 //        this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
 //        e.preventDefault();
 //    }); 
});

