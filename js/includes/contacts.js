app.on('init', () => {
	$contacts = $('.contacts');

	if ($contacts.length) {
		ymaps.ready(init);
    	
    	let coords = [53.000636, 37.320007];

    	if ( app.currentScale.name == 'xs' ||  app.currentScale.name == 'sm') {
			coords = [52.905160, 35.989935];
    	}
    		
        function init(){ 
            var contactsMap = new ymaps.Map("contacts-map", {
                center: coords,
                zoom: 8
            });

            markerContentLayout = ymaps.templateLayoutFactory.createClass(
                '<svg class="icon ymaps-icon icon-map-marker map-dealer"><use xlink:href="/assets/build/sprites/global.svg#icon-map-marker"/></svg>'
            );
            contactsMap.geoObjects.add(new ymaps.Placemark([52.905160, 35.989935], {
                hintContent: 'Carddex'	
            }, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: 'assets/images/transparent.png',
                iconImageSize: [32, 32],
                iconImageOffset: [-16, -32],
                iconContentLayout: markerContentLayout
            }));    

            contactsMap.controls.remove('searchControl');
            contactsMap.controls.remove('trafficControl');
            contactsMap.controls.remove('geolocationControl');
            contactsMap.controls.remove('rulerControl');
            contactsMap.controls.remove('fullscreenControl');
            contactsMap.behaviors.disable('scrollZoom');
        }

	}
})