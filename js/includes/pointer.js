app.on('init', () => {
	if($('.advantages').length > 0 || $('.item-page').length > 0){


		let $pointer = $('.pointer');
		let $pointerCurrent = $pointer.find('.pointer__current>span');
		let $pointerTotal = $pointer.find('.pointer__total');
		let $sections = $('section');
		// let pointerPageOffset = $('.pointer__current')[0].getBoundingClientRect().top;
		let $sectionsOffset = [];
		
		
		function countSectionIntervals() {	
			$sectionsOffset = [];
			$sections.each(function( i ) {
				let data = {id: i, offset: $(this).offset().top, white: $(this).hasClass('white-pointer')};
				$sectionsOffset.push(data);
			});
			let foffset = $('.footer').offset().top;
			$sectionsOffset.push({id: $sections.length, offset: foffset, white: true});
		};

		
		// $sectionItem = $('section.item-page');

		// if($sectionItem.length) {
		// 	$sections = $('section.item-page>*').slice(1);
		// }


		if($sections.length > 1)
		{
			// $pointer.css('display', );
			countSectionIntervals();
		}
		setInterval(function() {
		  countSectionIntervals();

		}, 4000);

		function changeItems() {
			pointerPos = scrollTop() + $(window).height() / 2;
			for (i=0; i<$sections.length; i++)	{
				if ($sectionsOffset[i].offset <= pointerPos && pointerPos < $sectionsOffset[i+1].offset ) {
					$pointerCurrent.html(i + 1);
					$pointerTotal.html($sections.length);
					if($sectionsOffset[i].white){
						$pointer.addClass('white');
					}else{
						$pointer.removeClass('white');
					}
				} 
			}
		}

		$sectionItem = $('section.item');

		if($sectionItem.length) {
			$sections = $('section.item>*')
		}

		changeItems();

		$(window).on('scroll', () => {
			changeItems();
			$('.pointer__mouse-stick').addClass('expanded');
	        setTimeout(function () {
	            $('.pointer__mouse-stick').removeClass('expanded');
	        }, 500);
		})
	} else {
		$('.pointer').hide();
	}
});