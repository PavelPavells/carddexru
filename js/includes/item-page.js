app.on('init', () => {
	let $item = $('.item-page');
	if ($item.length) {
		let mediaTabs = new Tabs($('.item-page__media-button'), $('.item-page__media-block'), 'active-tab');
		let contentTabs = new Tabs($('.item-page__description-link'), $('.item-page__description-content-block'), 'active-tab');
		let assTabs = new Tabs($('.assemblies__tab-item '), $('.assembly'), 'active-tab');
		
		let descriptionScroll = new PerfectScrollbar('.item-page__description-text-wrapper');
		let descriptionScroll2 = new PerfectScrollbar('.item-page__description-text-wrapper-2');
		let descriptionScroll3 = new PerfectScrollbar('.item-page__description-text-wrapper-3');
		let descriptionScroll4 = new PerfectScrollbar('.item-page__description-text-wrapper-4');
		let descriptionScroll5 = new PerfectScrollbar('.item-page__description-text-wrapper-5');

		let installerScroll = new PerfectScrollbar('.installer-info__list');

		$('.assembly__description').each(function(){ const ps = new PerfectScrollbar($(this)[0], {wheelSpeed: .1})});

		$videoBtn = $('#item-video-play-btn');
		$video = $('#item-video');
		$videoBtn.click(function () {
			$video.get(0).play();
			$videoBtn.css('display', 'none');
		})



		
		$('.item-slider').each(function () {
			$(this).lightGallery();
		})
		
		
		if ($('.installer-map')) {		
			function initInstallerMap(){ 
				let coords = [53.000636, 37.320007];
	            var installerMap = new ymaps.Map("installer-map", {
	                center: coords,
	                zoom: 8
	            });

	            markerContentLayout = ymaps.templateLayoutFactory.createClass(
	                '<svg class="icon ymaps-icon icon-map-marker map-dealer"><use xlink:href="/assets/build/sprites/global.svg#icon-map-marker"/></svg>'
	            );
	            installerMap.geoObjects.add(new ymaps.Placemark([52.905160, 35.989935], {
	                hintContent: 'Carddex'	
	            }, {
	                iconLayout: 'default#imageWithContent',
	                iconImageHref: 'assets/images/transparent.png',
	                iconImageSize: [32, 32],
	                iconImageOffset: [-16, -32],
	                iconContentLayout: markerContentLayout
	            }));    

	            installerMap.controls.remove('searchControl');
	            installerMap.controls.remove('trafficControl');
	            installerMap.controls.remove('geolocationControl');
	            installerMap.controls.remove('rulerControl');
	            installerMap.controls.remove('fullscreenControl');
	            installerMap.behaviors.disable('scrollZoom');
	        }

	        ymaps.ready(initInstallerMap);
		}

		let itemSlider = $('#item-page-slider').lightSlider({
			gallery:true,
			item:1,
			vertical:true,
			verticalHeight:500,
			vThumbWidth:65,
			thumbItem:5,
			thumbMargin:10,
			slideMargin:0,
			responsive : [
				{
	                breakpoint:1600,
	                settings: {
	                    verticalHeight:300,
	                    vThumbWidth:40,
	                    thumbItem:4,
	                  }
	            },
	            {
	                breakpoint:960,
	                settings: {
	                    verticalHeight:300,
	                    vThumbWidth:40,
	                    thumbItem:3,
	                  }
	            }
	            
	        ]
	    });  



	    $('.assembly .item-slider').each(function(){

			var sliderId =  $(this).attr('id');

				$("#" + sliderId).lightSlider({
					gallery:true,
					item:1,
					vertical:true,
					verticalHeight:500,
					vThumbWidth:65,
					thumbItem:4,
					thumbMargin:10,
					slideMargin:0,
					responsive : [
						{
							breakpoint:1600,
							settings: {
								verticalHeight:300,
								vThumbWidth:40,
								thumbItem:3,
							}
						},
						{
							breakpoint:960,
							settings: {
								verticalHeight:300,
								vThumbWidth:40,
								thumbItem:3,
							}
						}

					]
			});

	    });

	    $('.item-slider__prev').click(() => { 
    		 itemSlider.goToPrevSlide();
	    })

	    $('.item-slider__next').click(() => { 
    		 itemSlider.goToNextSlide();
	    })


		$(".item-page__description-expand").on("click", function(e){
			$(".item-page__description-text-wrapper").toggleClass("expanded")
			if($(".item-page__description-text-wrapper").hasClass("expanded")) {
				$(".item-page__description-expand>span").html("Скрыть")
			}else{ 
				$(".item-page__description-expand>span").html("Показать еще")
			}	
		})

		$(".item-page__assembly-description-expand").on("click", function(e){
			$(e.target).closest(".item-page__assembly-body").find(".item-page__assembly-description").toggleClass("expanded");
			if($(e.target).closest(".item-page__assembly-body").find(".item-page__assembly-description").hasClass("expanded")) {
				$(e.target).html("Скрыть")
			}else{ 
				$(e.target).html("Подробнее...")
			}
		})

		$(".item-page__info-features-expand ").on("click", function(e){
			$(e.target).closest(".col-xs-12").find(".item-page__info-list").toggleClass("expanded");
			if($(e.target).closest(".col-xs-12").find(".item-page__info-list").hasClass("expanded")) {
				$(e.target).html("Скрыть")
			}else{ 
				$(e.target).html("Показать все")
			}
		})



	};

	$related = $(".item-page__related");

	if ($related.length) {
		owlCarouselFacade($related.find('.item-page__related-list'), {
			dots: true,
			margin: 0,
			responsive: {
				0: {
					items: 1
				},
				640: {
					items: 2
				},
				960: {
					items: 3
				},
				1280: {
					items: 4
				}, 
				1600: {
					items: 5
				}
			}
		}, ['xs', 'sm', 'md', 'lg', 'xl', 'ml'], $related.find('.pag__left'), $related.find('.pag__right'));
	}



});