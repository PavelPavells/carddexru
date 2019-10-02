app.on('init', () => {
    $service = $('.service');
    if ( $service.length ) {
        let guaranteeScroll = new PerfectScrollbar('.guarantee__text');
        $( '.guarantee__text' ).on( 'mousewheel DOMMouseScroll', function ( e ) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;

            this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
            e.preventDefault(); 
        });
    }

    $termsInput = $('#terms');
    $submitBtn = $('#service-submit');
    $termsInput.on('change', function () {
        if (this.checked) {
            $submitBtn.prop('disabled', false)
        } else {
            $submitBtn.prop('disabled', true)
        }
    })

    let $fileInputs = $('input[type=file]');

    $fileInputs.each(function(index){
        $(this).on('change', function (e) {
            let fileName, targetLabel;
            fileName = e.target.value.split( '\\' ).pop();
            targetLabel = $('label[for=' + $(this).attr('id'));
            if( e.target.value.length ){
                targetLabel.find('.file-label__text').html(fileName);
                targetLabel.addClass('has-file');
            } else {
                targetLabel.find('.file-label__text').html('');
                targetLabel.removeClass('has-file');
            }

            console.log( fileName, targetLabel);
            
        })
    })


});