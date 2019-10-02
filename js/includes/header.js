app.on('init', () => {
    
    let sidebarScroll = new PerfectScrollbar('.sidebar__list-wrapper');
    $( '.sidebar' ).on( 'mousewheel DOMMouseScroll', function ( e ) {
        var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;

        this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
        e.preventDefault(); 
    });

    $('.burger-button').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('goto-cross').toggleClass('goto-burger');
        $('.mobile').toggleClass('mobile-visible');
        $('.header__logo').toggleClass('mobile-hidden');
        $('.header__phone-block').toggleClass('mobile-visible');
        if ( $(this).hasClass('goto-cross') ) {
            app.scrollLock();        
        } else {
            app.scrollUnlock();      
        }
    });
})

function headerFix() {
    let headerHeight = $('.header').outerHeight();
    $('.before').css('height', headerHeight);
    $('.sidebar').css('padding-top', headerHeight);
}

app.on('init', () => {
    headerFix()
});

app.on('changeScale', () => {
    headerFix();
});
