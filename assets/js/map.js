(function() {
  function initialize() {
    var latLng = new google.maps.LatLng(37.9757059, -122.5322119);
    var opts = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), opts);
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
    });
    var msg = "<a href='http://www.falkirkculturalcenter.org/' target='_blank' style='color: black'>Falkirk Cultural Center</a><br>1408 Mission Avenue<br>San Rafael, CA 94901<br>(415) 485-3328";
    var infowindow = new google.maps.InfoWindow({ content: msg });
    google.maps.event.addListener(map, 'tilesloaded', function() {
      infowindow.open(map, marker);
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
})();



