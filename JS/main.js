// initialze map
function initMap() {
    // Map Options
    var options = {
        zoom: 8,
        center: { lat: 43.0730517, lng: -89.401230 }
    }

    // New Map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // listen for click on map
    google.maps.event.addListener(map, 'click',
        function (event) {
            // add marker
            addMarker({ coords: event.latLng });
        });

    var markers = [
        {
            coords: { lat: 42.9288944, lng: -88.8370509 },
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<h1></h1>'
        },
        {
            coords: { lat: 43.0972222, lng: -89.5041667 }
        },
        {
            coords: { lat: 41.881832, lng: -87.623177 }
        }
    ];

    // loop through markers 
    for (var i = 0; i < markers.length; i++) {
        // add marker
        addMarker(markers[i]);
    }


    // add marker funciton
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon:props.iconImage
        });

        // check for custom icon
        if (props.iconImage) {
            // set icon image
            marker.setIcon(props.iconImage);
        }
    }
}