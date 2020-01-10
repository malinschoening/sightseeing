

function validate(){
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
if(email == "hej" && password == "hej"){
window.location = "map.html";
    }
else{
}
}

//skapa kartan och ställ in vart den ska fokusera samt
//ta bort zoomknapparna etc
      var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 59.339543, lng: 17.913743},
          zoom: 13,
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false
        });
        infoWindow = new google.maps.InfoWindow;
          
//geolocation för att hitta ens nuvarande plats
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Nuvarande plats');
            infoWindow.open(map);
            map.setCenter(pos);
          }, 
    //Om den hittar din plats kommer den upp på kartan
            function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
    // Om tex webbläsaren inte stödjer geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
          
    // Markera platserna med en marker 
          var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
          var judarskogen = new google.maps.Marker({
    position: {lat:59.339543, lng:17.913743},
    map: map,
    title: 'Judarskogen',
    icon: iconBase + 'info-i_maps.png'
  });
          var brommaplan = new google.maps.Marker({
    position: {lat:59.338126, lng:17.940222},
    map: map,
    title: 'Brommaplan',
    icon: iconBase + 'info-i_maps.png'
  });
          var akeshov = new google.maps.Marker({
    position: {lat:59.340648, lng:17.925341},
    map: map,
    title: 'Åkeshofs slott',
    icon: iconBase + 'info-i_maps.png'
  });
          var hundstallet = new google.maps.Marker({
    position: {lat:59.341332, lng:17.922959},
    map: map,
    title: 'Hundstallet',
    icon: iconBase + 'info-i_maps.png'
  });
          var brommablocks = new google.maps.Marker({
    position: {lat:59.355231, lng:17.955652},
    map: map,
    title: 'Bromma Blocks',
    icon: iconBase + 'info-i_maps.png'
  });
          var brommagolf = new google.maps.Marker({
    position: {lat:59.348060, lng:17.940279},
    map: map,
    title: 'Bromma golfbana',
    icon: iconBase + 'info-i_maps.png'
  });
          var drottningholm = new google.maps.Marker({
    position: {lat:59.321688, lng:17.886642},
    map: map,
    title: 'Drottningholm',
    icon: iconBase + 'info-i_maps.png'
  });
          var lillsjon = new google.maps.Marker({
    position: {lat:59.341678, lng:17.956412},
    map: map,
    title: 'Lillsjön',
    icon: iconBase + 'info-i_maps.png'
  });
          var bjorkan = new google.maps.Marker({
    position: {lat:59.348695, lng:17.901738},
    map: map,
    title: 'Björklunds hage',
    icon: iconBase + 'info-i_maps.png'
  });
          var brommaflyg = new google.maps.Marker({
    position: {lat:59.354332, lng:17.950950},
    map: map,
    title: 'Bromma flygplats',
    icon: iconBase + 'info-i_maps.png'
  });
     var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }; 
          
    var current = new google.maps.Marker({
        position:{lat: position.coords.latitude,
              lng: position.coords.longitude},
        map: map,
        title: 'Nuvarande plats',
        icon: iconBase + 'blu-blank.png'
        
    })
    
//När man går till platsen kommer det upp infowindows om platserna 
          if(pos == {lat:59.339543, lng:17.913743}) {
              var jud = document.getElementById('jud');
              var infojud = new google.maps.InfoWindow({
                  position: {lat:59.339543, lng:17.913743},
                  map: map,
                  title: 'Judarskogen',
                  content: jud
              });
              
          } 
          else if(pos == {lat:59.338126, lng:17.940222}){
              var brompan = document.getElementById('brompan');
              var infoBP = new google.maps.InfoWindow({
                  position: {lat:59.338126, lng:17.940222},
                  map: map,
                  title: 'Brommaplan',
                  content: brompan
              });
          }
          
          else if(pos == {lat:59.340648, lng:17.925341}){
              var akes = document.getElementById('akes');
              var infoAkes = new google.maps.InfoWindow({
                  position:{lat:59.340648, lng:17.925341},
                  map: map,
                  title: 'Åkeshofs slott',
                  content: akes
              });
          }
          else if(pos == {lat:59.355231, lng:17.955652}){
              var hund = document.getElementById('hund');
              var infoHund = new google.maps.InfoWindow({
                  position:{lat:59.355231, lng:17.955652},
                  map: map,
                  title: 'Hundstallet',
                  content: hund
              });
          }
          else if(pos == {lat:59.355231, lng:17.955652}){
              var blocks = document.getElementById('blocks');
              var infoBlocks = new google.maps.InfoWindow({
                  position:{lat:59.355231, lng:17.955652},
                  map: map,
                  title: 'Bromma Blocks',
                  content: blocks
              });
          }
          else if(pos == {lat:59.348060, lng:17.940279}){
              var golf = document.getElementById('golf');
              var infoGolf = new google.maps.InfoWindow({
                  position:{lat:59.348060, lng:17.940279},
                  map: map,
                  title: 'Bromma Gold',
                  content: golf
              });
          }
          else if(pos == {lat:59.321688, lng:17.886642}){
              var drott = document.getElementById('drott');
              var infoDrott = new google.maps.InfoWindow({
                  position:{lat:59.321688, lng:17.886642},
                  map: map,
                  title: 'Drottningholm',
                  content: drott
              });
          }
          else if(pos == {lat:59.341678, lng:17.956412}){
              var drott = document.getElementById('lill');
              var infoLill = new google.maps.InfoWindow({
                  position:{lat:59.341678, lng:17.956412},
                  map: map,
                  title: 'Lillsjön',
                  content: lill
              });
          }
          else if(pos == {lat:59.348695, lng:17.901738}){
              var bjork = document.getElementById('bjork');
              var infoBjork = new google.maps.InfoWindow({
                  position:{lat:59.348695, lng:17.901738},
                  map: map,
                  title: 'Björklunds hage',
                  content: bjork
              });
          }
          else if(pos == {lat:59.354332, lng:17.950950}){
              var flyg = document.getElementById('flyg');
              var infoFlyg = new google.maps.InfoWindow({
                  position:{lat:59.354332, lng:17.950950},
                  map: map,
                  title: 'Bromma flygplats',
                  content: flyg
              });
          }
          
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }}
