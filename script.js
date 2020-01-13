

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
          
         
    // Markera platserna med en marker 
          var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
          var judarskogen = new google.maps.Marker({
    position: {lat:59.339543, lng:17.913743},
    map: map,
    title: 'Judarskogen',
    icon: iconBase + 'info-i_maps.png'
  });
          var jud = '<div id="jud">' +
              '<img src="judar.jpg"/>' + 
              '<p>Judarskogen med sjön Judarn blev Stockholms stads första naturreservat 1995. Området ligger söder om tunnelbanan mellan stationerna Åkeshov och Ängbyplan. Sjön ligger centralt och omges av skogspartier och ängsmarker. Det finns ett nät av promenadstigar. Syftet med reservatet är att skydda De Geer-moränerna , utveckla och bevara den biologiska mångfalden samt att säkerställa att området kan användas för friluftsliv. Enligt bevarandeplanen för Natura 2000-området ska man skapa en gynnsam miljö för den större vattensalamandern. Även om alsumpskogen i i området anses ha för dålig kontinuitet i dagsläget för att vara skyddsvärd så är planen att utveckla området så att den i framtiden uppfyller kriterierna för skyddsvärd naturtyp enligt Natura 2000.</p>' + 
              '</div>';
      var infojud = new google.maps.InfoWindow({
                  content: jud
              });
          judarskogen.addListener('click', function() {
    infojud.open(map, judarskogen);
  });
          
          var brommaplan = new google.maps.Marker({
    position: {lat:59.338126, lng:17.940222},
    map: map,
    title: 'Brommaplan',
    icon: iconBase + 'info-i_maps.png'
  });
          
           var brompan = '<div id="brompan">' + 
               '<img src="brommaplan.jpg"/>' +
               '<p>Här finns det endast kommunaltrafik samt McDonalds.</p>' +
          '</div>';
              var infoBP = new google.maps.InfoWindow({
                  content: brompan
              });
          brommaplan.addListener('click', function() {
              infoBP.open(map, brommaplan);
          })
          
          
          
          
          var akeshov = new google.maps.Marker({
    position: {lat:59.340648, lng:17.925341},
    map: map,
    title: 'Åkeshofs slott',
    icon: iconBase + 'info-i_maps.png'
  });
           var akes = '<div id="akes"><img src="slott.JPG"/><p>Åkeshofs Slott ligger i det historiska distriktet och nära flygplatsen i Bromma. Stockholms medeltidsmuseum och Kungliga Operan tillhör de kulturella höjdpunkterna, och Drottningholms slott och Djursholms slott är några av områdets främsta sevärdheter. Gå på ett evenemang eller se en match på Solvalla, och avsätt gärna lite tid för att besöka Tivoli Gröna Lund, en av områdets främsta turistattraktioner som du absolut inte får missa. Rökfria Åkeshofs Slott är ett hotell som erbjuder en restaurang, en bar/lounge och en bastu. Dessutom erbjuds gratis frukostbuffé, gratis wi-fi i allmänna utrymmen och avgiftsfri parkering. Dessutom erbjuds business-service, gratis dagstidningar samt en trädgård. Samtliga 23 rum har gratis wi-fi, platt-tv med kabelkanaler och gratis flaskvatten. Gäster erbjuds även dusch, skrivbord och gratis toalettartiklar.</p></div>';
          
              var infoAkes = new google.maps.InfoWindow({
                  content: akes
              });
          akeshov.addListener('click', function() {
              infoAkes.open(map, akeshov);
          })
          
          
          
          var hundstallet = new google.maps.Marker({
    position: {lat:59.341332, lng:17.922959},
    map: map,
    title: 'Hundstallet',
    icon: iconBase + 'info-i_maps.png'
  });
           var hund = '<div id="hund"><img src="hundstallet.jpg"/><p>Hundstallets uppgift är att ta emot och vårda hundar som inte längre kan vara hos sina mattar och hussar. Skälen till att hundarna hamnar på Hundstallet är många. Familjehunden som är på rymmen hamnar här efter att polisen har fångat in den. Ägarna till dessa hundar kommer oftast så fort de kan och hämtar ut sin vän. Familjesituationer kan också drastiskt förändras som t ex vid dödsfall eller sjukdom. Om Hundägaren blir frihetsberövad kommer också hunden oftast till Hundstallet. Vidare kommer ett stort antal vanvårdade hundar in på Hundstallet vars ägare misskött dem. Sen har vi hundarna som dumpas när hundägaren av någon anledning tröttnat på dem. Har de tur och inte blir påkörda eller hungrar ihjäl så hittas de och kommer till oss på Hundstallet. Målet med verksamheten är att se till att utsatta hundar som hamnar på Hundstallet, oavsett anledning skall få det så bra som möjligt utifrån hundens förutsättningar och få ett nytt kärleksfullt hem.</p></div>';
              var infoHund = new google.maps.InfoWindow({
                  content: hund
              });
          hundstallet.addListener('click', function(){
              infoHund.open(map, hundstallet);
          })
          
          
          var brommablocks = new google.maps.Marker({
    position: {lat:59.355231, lng:17.955652},
    map: map,
    title: 'Bromma Blocks',
    icon: iconBase + 'info-i_maps.png'
  });
          
          var blocks = '<div id="blocks"><img src="blocks.jpeg"/><p>1936 - Bromma flygplats första hangarflygplats färdigställdes. Stålbalkarna designades av Paul Hedqvist och kom från den gamla Tranebergsbron som revs 1934. Hangar A används nu som terminalbyggnad för den moderna flygplatsen. 1948 - Hangar 3 designades och färdigställdes för de stora Boeing Stratocruisers som SAS beställde. Detta var en toppmodern byggnad då och var den största byggnaden i Bromma på 151x62 meter. 1962 - Flygplatsverksamheten för Hangar 3 avslutades när SAS flyttade till Arlanda. 1972 - Den första riktiga stormarknaden, B o W, öppnades i Hangar 3, vilket gjorde den till en populär shoppingdestination för besökare från hela Stockholm. 1999 - Hangarerna 1, 2 och 3 köptes av KF Fastigheter och en omfattande utveckling av området inleddes. 2005 - Grundarbetena för Bromma Blocks börjar och förvandlar platsen till den ultimata shoppingupplevelsen som ligger på en kulturhistorisk destination. Idén från början var att hedra områdets historia och lyfta fram de ursprungliga exteriörerna av de ikoniska hangarerna. 2007 - Nya stormarknader Coop Forum och Zoo.se öppnar och lockar fler människor att handla sina vardagsvaror i en spännande och extraordinär miljö. 2010 - Bromma Blocks Galleria öppnar sina dörrar för allmänheten samtidigt som XXL också öppnar.</p></div>';
              var infoBlocks = new google.maps.InfoWindow({
                  content: blocks
              });
          brommablocks.addListener('click', function(){
              infoBlocks.open(map, brommablocks);
          })
          
          var brommagolf = new google.maps.Marker({
    position: {lat:59.348060, lng:17.940279},
    map: map,
    title: 'Bromma golfbana',
    icon: iconBase + 'info-i_maps.png'
  });
          var golf = '<div id="golf"><img src="gold.jpg"/><p>Bromma Golf är centralt belägen vid Bromma Flygplats, bara 10 minuter från city. Här finns en utmanande åretrunt-öppen 9-hålsbana, lämplig för alla kategorier spelare, belägen bland lummiga kolonilotts-områden och vackra promenadvägar. Här finns även Stockholms största drivingrange med 80 utslagsmattor och bra träningsytor med putt- och chippinggreen och övningsbunker. På anläggningen bedrivs golfskola som bl a erbjuder nybörjar- och "Golf för Vuxna"-kurser samt juniorläger. Anläggningen erbjuder restaurang, mindre konferensrum och en golfshop. </p></div>';
              
          var infoGolf = new google.maps.InfoWindow({
                  content: golf
              });
          brommagolf.addListener('click', function(){
              infoGolf.open(map, brommagolf);
          })
          
          
          var drottningholm = new google.maps.Marker({
    position: {lat:59.321688, lng:17.886642},
    map: map,
    title: 'Drottningholm',
    icon: iconBase + 'info-i_maps.png'
  });
          
          var drott = '<div id="drott"><img src="drottning.jpeg"/><p>Gör en dagsutflykt till Drottningholm och upplev en historisk miljö av högsta klass. Drottningholms slott är Sveriges bäst bevarade kungliga slott uppfört på 1600-talet, kungafamiljens permanenta bostad och ett av Stockholms tre världsarv. Slottet byggdes efter fransk förebild av arkitekten Nicodemus Tessin den äldre, på uppdrag av drottning Hedvig Eleonora. Sedan dess har flera kungligheter satt sin prägel på slottet. Här finns magnifika salonger från 1600-, 1700- och 1800-talen, en vacker parkanläggning, en unik slottsteater och kinesisk paviljong. Den imponerande barockträdgården började anläggas 1681 efter ritningar av Nicodemus Tessin den yngre. Slottet och parken är till största delen öppen för besökare året om. Drottningholms Slottsteater är en av Europas bäst bevarade 1700-talsteatrar och den enda i världen som fortfarande använder originalmaskineriet regelbundet. Slottsteatern har guidade visningar och föreställningar sommartid. Sedan 1981 är slottet den nuvarande kungafamiljens permanenta bostad. Rummen i slottets södra del är reserverade för kungafamiljens medlemmar. 1991 blev Drottningholm, som den första svenska sevärdheten, upptagen på UNESCO:s världsarvslista. Tillsammans med det exotiska lustslottet Kina Slott, slottsteatern och den storslagna slottsparken utgör Drottningholm en unik helhet. Ett trevligt sätt att ta sig till Drottningholm på sommaren eller till vinterns julmarknad är med någon av sekelskiftesbåtarna. Båtresan genom sjön Mälaren tar en timme, så varför inte kombinera båtresan med en lunch ombord? </p></div>';
              var infoDrott = new google.maps.InfoWindow({
                  content: drott
              });
          drottningholm.addListener('click', function(){
              infoDrott.open(map, drottningholm);
          })
          
          var lillsjon = new google.maps.Marker({
    position: {lat:59.341678, lng:17.956412},
    map: map,
    title: 'Lillsjön',
    icon: iconBase + 'info-i_maps.png'
  });
          
          var lill = '<div id="lill"><img src="lill.jpg"/><p>Lillsjön ligger i ett mindre parkområde strax söder om Bromma flygplats och omges av bebyggelse, trafikleder, koloniområden och mindre industrier. Större, definierade tillflöden saknas, två dagvattenledningar mynnar i den västra delen av sjön. Lillsjön står via en kort kanal i fri förbindelse med Margretelundsviken som är en del av Ulvsundasjön (Mälaren).</p></div>';
              var infoLill = new google.maps.InfoWindow({
                  content: lill
              });
          
          lillsjon.addListener('click', function(){
              infoLill.open(map, lillsjon);
          })
          
          
          
          var bjorkan = new google.maps.Marker({
    position: {lat:59.348695, lng:17.901738},
    map: map,
    title: 'Björklunds hage',
    icon: iconBase + 'info-i_maps.png'
  });
          var bjork = ' <div id="bjork"><img src="bjork.jpg"/><p>Lekplatsen ligger mitt i stadsdelen. Området består i grunden av ett historiskt natur- och kulturlandskap med gravfält, skogsdungar och en beteshage. En 4H-gård ligger precis intill lekplatsen med ett café, toalett och djurhållning.</p></div>';
              var infoBjork = new google.maps.InfoWindow({
                  content: bjork
              });
          bjorkan.addListener('click', function(){
              infoBjork.open(map, bjorkan);
          })
          
          
          
          var brommaflyg = new google.maps.Marker({
    position: {lat:59.354332, lng:17.950950},
    map: map,
    title: 'Bromma flygplats',
    icon: iconBase + 'info-i_maps.png'
  });
          
          var flyg = '<div id="flyg"><img src="flyg.jpg"/><p>1946 SAS bildas.<br>1957 Linjeflyg bildas.<br>1962 SAS utrikes flyttar till Arlanda.<br>1978 Folkflyget tar sin början.<br>1983 Linjeflyg flyttar från Bromma till Arlanda.<br>1983–92 Flygplatsen trafikeras inte av reguljära flygningar, men används fortfarande flitigt av allmänflyget och affärsflyget.<br>1992 Den svenska flygtrafiken avregleras. Inrikes trafikflyg återvänder till Bromma, förutsatt att den klarar flygplatsens stränga miljökrav.<br>1993 En konkurrenslagstiftning kommer, vilket innebär att Luftfartsverkets flygplatser öppnas för konkurrens. Nordic Aero börjar bedriva ramptjänst åt Malmö Aviation. Med Nordic Aero kommer BP, som tecknar avtal med Malmö Aviation. Malmö Aviation går samma år i konkurs, byter ägare och fortsätter sin verksamhet med undantag av Londonlinjen. Detta på grund av att regeringen inför ett policybeslut, som innebär att ingen ytterligare reguljär utrikestrafik får etableras på Bromma. Skyways flyttar samma år sin verksamhet till Arlanda.<br>1994 Markupplåtelseavtalet mellan staten och Stockholms stad förlängs till och med 2011.<br>1995 Luftfartsverket återtar hela ramphandlingen och tar över tjänsten åt BP. Division Stockholm bildas.<br>1996 Ett tidsbegränsat tilläggsavtal till markupplåtelseavtalet förhandlas fram. På grund av affärsflygets ökning avsätts en person att strukturera upp g/a handlingen, vilket leder till en permanent lösning.<br>1999 EU ifrågasätter utrikesrestriktions berättigande efter påtryckningar från British Airways. Frågan ligger för närvarande för beslut hos regeringen. Malmö Aviation i samarbete med Posten express arbetar för att utveckla airmail och avtalsfrakt. Bromma satsar på en godsmottagning med utrustning för att klara en framtida frakthantering.<br>2002 Renoveringen av avgångshallen blir klar.<br>2001 Bromma blir en fullt samordnad flygplats i enlighet med rådets förordning (EEG) nr 95/93 om gemensamma regler för fördelning av ankomst- och avgångstider vid gemenskapens flygplatser. Inträde i Schengen sker.<br>2002 Tilläggsavtalet omförhandlas till markupplåtelseavtalet.<br>2003 Utrikesembargot släpps. Invigning av nya flygtrafikledningstorn under november.<br>2004 En ny terminal och hangar för affärsflyget öppnar.<br>2005 Nya ankomsthallen invigs.<br>2006 Bromma Stockholm Airport firar 70 år i maj.<br>2007 LFV och Stockholms stad är överens om ett nytt avtal kring marken för flygplatsen som gäller till 2038. Antalet flygrörelser tillåts öka något medan öppethållandet blir detsamma, om än förskjutet två timmar senare på söndagarna. Stockholms stad får en ekonomisk ersättning per avresande passagerare.</p></div>';
              var infoFlyg = new google.maps.InfoWindow({
                  content: flyg
              });
          brommaflyg.addListener('click', function(){
              infoFlyg.open(map, brommaflyg);
          })
          
          
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
          
    var current = new google.maps.Marker({
        position:{lat: position.coords.latitude,
              lng: position.coords.longitude},
        map: map,
        title: 'Nuvarande plats',
        icon: iconBase + 'blu-blank.png'
        });
    
          
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }}
