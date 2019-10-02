// app.on('init', () => {
    
//     let $dealersMap = $('.dealers');

//     if ($dealersMap.length) {
    
//         ymaps.ready(init);
    
//         function init(){ 
//             var myMap = new ymaps.Map("map", {
//                 center: [58.112309, 69.877686],
//                 zoom: 3
//             });

//             partnerContentLayout = ymaps.templateLayoutFactory.createClass(
//                 '<svg class="icon ymaps-icon icon-map-marker map-partner"><use xlink:href="/assets/build/sprites/global.svg#icon-map-marker"/></svg>'
//             );

//             dealerContentLayout = ymaps.templateLayoutFactory.createClass(
//                 '<svg class="icon ymaps-icon icon-map-marker map-dealer"><use xlink:href="/assets/build/sprites/global.svg#icon-map-marker"/></svg>'
//             );

//             for(let i = 0; i < 100; i++) {
//                 if (partnersJSON.rows[i].lat && partnersJSON.rows[i].lng) {
//                     if (partnersJSON.rows[i].dealer == 1) {
                        
//                         myMap.geoObjects.add(new ymaps.Placemark([partnersJSON.rows[i].lat, partnersJSON.rows[i].lng], {
//                             hintContent: partnersJSON.rows[i].partner
//                         }, {
//                             iconLayout: 'default#imageWithContent',
//                             iconImageHref: 'assets/images/transparent.png',
//                             iconImageSize: [32, 32],
//                             iconImageOffset: [-16, -32],
//                             iconContentLayout: dealerContentLayout
//                         }));    
//                     } else {
//                         myMap.geoObjects.add(new ymaps.Placemark([partnersJSON.rows[i].lat, partnersJSON.rows[i].lng], {
//                             hintContent: partnersJSON.rows[i].partner
//                         }, {
//                             iconLayout: 'default#imageWithContent',
//                             iconImageHref: 'assets/images/transparent.png',
//                             iconImageSize: [32, 32],
//                             iconImageOffset: [-16, -32],
//                             iconContentLayout: partnerContentLayout
//                         }));   
//                     }
//                 }
//             };

//             myMap.controls.remove('searchControl');
//             myMap.controls.remove('trafficControl');
//             myMap.controls.remove('geolocationControl');
//             myMap.controls.remove('rulerControl');
//             myMap.controls.remove('fullscreenControl');
//             myMap.behaviors.disable('scrollZoom');

//         }    
//     }
// })

app.on('init', () => {
    
    let $dealers = $('.dealers');

    if ($dealers.length) {
    
        ymaps.ready(init);
    
        function init(){ 
            var myMap = new ymaps.Map("map", {
                center: [58.112309, 69.877686],
                zoom: 3
            });

            partnerContentLayout = ymaps.templateLayoutFactory.createClass(
                '<svg class="icon ymaps-icon icon-map-marker map-partner"><use xlink:href="/assets/build/sprites/global.svg#icon-map-marker"/></svg>'
            );

            dealerContentLayout = ymaps.templateLayoutFactory.createClass(
                '<svg class="icon ymaps-icon icon-map-marker map-dealer"><use xlink:href="/assets/build/sprites/global.svg#icon-map-marker"/></svg>'
            );


            var partnerClusterer = new ymaps.Clusterer({
                preset: 'islands#nightClusterIcons',
                groupByCoordinates: false,                
                clusterDisableClickZoom: false,
                clusterHideIconOnBalloonOpen: false,
                geoObjectHideIconOnBalloonOpen: false,
                gridSize: 120,
                hintContent: 'Посмотреть ближе'

            });


            for(let i = 0; i < partnersJSON.rows.length; i++) {
                if ((partnersJSON.rows[i].lat != null) && (partnersJSON.rows[i].lng != null)) {

                    let baloonContent = '';
                    if (partnersJSON.rows[i].phone && (partnersJSON.rows[i].phone != null)) { 
                        baloonContent += 'Телефон: ' + partnersJSON.rows[i].phone 
                    }; 
                    if (partnersJSON.rows[i].email && (partnersJSON.rows[i].email != null)) { 
                        baloonContent += '<br> Email: ' + partnersJSON.rows[i].email 
                    };
                    if (partnersJSON.rows[i].site && (partnersJSON.rows[i].site != null)) {
                        baloonContent += '<br> Сайт: <a href="http://' + partnersJSON.rows[i].site + '" target="_blank">' + partnersJSON.rows[i].site + '</a>';
                    } 

                    if (partnersJSON.rows[i].dealer == 1) {

                        myMap.geoObjects.add(new ymaps.Placemark([partnersJSON.rows[i].lat, partnersJSON.rows[i].lng], {
                            hintContent: partnersJSON.rows[i].partner,
                            balloonContentHeader: partnersJSON.rows[i].partner,
                            balloonContentBody: baloonContent
                        }, {
                            iconLayout: 'default#imageWithContent',
                            iconImageHref: 'assets/images/transparent.png',
                            iconImageSize: [32, 32],
                            iconImageOffset: [-16, -32],
                            iconContentLayout: dealerContentLayout
                        }));    
                    } else {
                        partnerClusterer.add( new ymaps.Placemark([partnersJSON.rows[i].lat, partnersJSON.rows[i].lng], {
                            hintContent: partnersJSON.rows[i].partner,
                            balloonContentHeader: partnersJSON.rows[i].partner,
                            balloonContentBody: baloonContent
                        }, {
                            iconLayout: 'default#imageWithContent',
                            iconImageHref: 'assets/images/transparent.png',
                            iconImageSize: [32, 32],
                            iconImageOffset: [-16, -32],
                            iconContentLayout: partnerContentLayout

                        }));   
                    }
                }
            };
            // console.log(dealerObjects);
            myMap.geoObjects.add(partnerClusterer);
            // myMap.geoObjects.add(dealerObjects);
            
            myMap.controls.remove('searchControl');
            myMap.controls.remove('trafficControl');
            myMap.controls.remove('geolocationControl');
            myMap.controls.remove('rulerControl');
            myMap.controls.remove('fullscreenControl');
            myMap.behaviors.disable('scrollZoom');

            window.map = myMap;
            $('.organization__map').on('click', function(e){
                var coords = $(e.target).data('coords');
                myMap.setCenter(coords, 15, {
                    duration: 1000
                })
                scrollTop($dealers.offset().top, true);
            })
        }    
    }
})

