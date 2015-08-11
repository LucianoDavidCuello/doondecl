<script>
<?php 
$city['cerrillo'] = '{"lat": -33.3239297, "lng": -70.8183284}';
$city['cerronavia'] = '{"lat": -33.42, "lng": -70.733333 }';
$city['conchali'] = ' {"lat": -33.3846893, "lng": -70.68002129999999 }';
$city['elbosque'] = ' {"lat": -33.566667, "lng": -70.666667 }';
$city['estacioncentral'] = '  {"lat": -33.4590774, "lng": -70.6990045 }';
$city['huechuraba'] = '{"lat": -33.3742128, "lng": -70.6367425 }';
$city['independencia'] = '{"lat": -33.416667, "lng": -70.666667 }';
$city['lacisterna'] = '{"lat": -33.5264495, "lng": -70.66135109999999 }';
$city['laflorida'] = '{"lat": -33.5226882, "lng": -70.5987142 }';
$city['lapintana'] = '{"lat": -33.5855661, "lng": -70.6285838 }';
$city['lagranja'] = '{"lat": -33.53779310000001, "lng": -70.62067800000001 }';
$city['lareina'] = ' {"lat": -33.4411269, "lng": -70.5340591 }';
$city['lascondes'] = ' {"lat": -33.374626, "lng": -70.52126799999999 }';
$city['lobarnechea'] = '{"lat": -33.352669, "lng": -70.518517 }';
$city['loespejo'] = '{"lat": -33.5139265, "lng": -70.6930841 }';
$city['loprado'] = '{"lat": -33.4442688, "lng": -70.7233493 }';
$city['macul'] = '{"lat": -33.4851471, "lng": -70.5992005 }';
$city['maipu'] = '{"lat": -33.5209155, "lng": -70.7631335 }';
$city['nunoa'] = '{"lat": -33.4566678, "lng": -70.5978415 }';
$city['pedroaguirrecerda'] = '{"lat": -33.4940901, "lng": -70.67650259999999 }';
$city['penalolen'] = '{"lat": -33.4719116, "lng": -70.5627854 }';
$city['providencia'] = '{"lat": -33.4314474, "lng": -70.6093325 }';
$city['pudahuel'] = '{"lat": -33.4421135, "lng": -70.7640644}';
$city['quilicura'] = '{"lat": -33.3576747, "lng": -70.72927179999999 }';
$city['quintanormal'] = '{"lat": -33.4291657, "lng": -70.69227819999999 }';
$city['recoleta'] = '{"lat": -33.3972075, "lng": -70.6428148}';
$city['renca'] = '{"lat": -33.4063601, "lng": -70.7279965 }';
$city['sanmiguel'] = '{"lat": -33.4923545, "lng": -70.651797 }';
$city['sanjoaquin'] = '{"lat": -33.496202, "lng": -70.6283361 }';
$city['sanramon'] = '{"lat": -33.538901, "lng": -70.64249889999999 }';
$city['santiago'] = '{"lat": -33.4378305, "lng": -70.6504492 }';
$city['centro'] = '{"lat": -33.4378305, "lng": -70.6504492 }';

$city['vitacura'] = '{"lat": -33.3905211, "lng": -70.57241239999999 }';
$city['padrehurtado'] = '{"lat": -33.5749687, "lng": -70.8149905 }';
$city['pirque'] = '{"lat": -33.6793441, "lng": -70.58310689999999 }';
$city['sanbernardo'] = '{"lat": -33.5854485, "lng": -70.69873609999999 }';
$city['sanjosedemaipo'] = '{"lat": -33.643169, "lng": -70.345207 }';
$city['puentealto'] = '{"lat": -33.6186082, "lng": -70.5906057 }';


if(isset($_GET['data'])){
	echo ' localStorage.setItem("clave", "'.$_GET['data'].'");';
}
if(isset($_GET['city'])){
	if(!isset($city[strtolower($_GET['city'])]) ){
		$googleDirs = json_decode(file_get_contents("https://maps.googleapis.com/maps/api/geocode/json?address=".$_GET['city'].",chile&key=AIzaSyCd4LS0T_Otappn8O9mKYKvGAgWLzuWuSo"));
		if(!is_null($googleDirs)){
			if($googleDirs->status=="OK"){
				//echo var_dump($googleDirs->results[0]->geometry->location);//['results']->geometry->location->"lat";
				$latLng = '{"lat": '.$googleDirs->results[0]->geometry->location->lat.', "lng":'.$googleDirs->results[0]->geometry->location->lng.'}';
				echo 'localStorage.setItem("address", \''.$latLng.'\');';

			}
		}
	}else{
		echo 'localStorage.setItem("address", \''.$city[$_GET['city']].'\');';
	}
	echo 'localStorage.setItem("addressText", "'.$_GET['city'].'");';
}
?>
 if( location.hash != ""){localStorage.setItem("clave", location.hash.replace("#","")); } 
</script>

<style>
	.btn-cat{

		background-color: #cacaca;
		min-height: 70px;
		color: white;
		text-align: center;
		font-size: 1.2em;
		cursor: pointer;
		position: relative;
	}
	.opabtn{
		background-color: #333;
		box-shadow: inset 0 2px 35px 5px rgba(0,0,0,.73);
		min-height: 70px;
		width: 100%;
		height: 100%;
		opacity: 0.7;
	}
	.btn-title{
		left: 0;
		position: absolute;
		top: calc(50% - 13px);
		width: 100%;
	}
	.p0{
		padding: 0 !important;
	}
	.view-promo-div{
		width: 95%;
  height: 270px;
  position: absolute;
  z-index: 100;
	}
	.btn-view-promo{
		position: absolute;
  top: 45%;
  left: calc(50% - 70px);
  width: 140px;
	}
</style>
<header class="f"> 
	<!--<figure class="Header-brand-img"> <img src="http://doondeapp.com/img/logo.png" alt="DoondeApp" /> </figure>--> 

	<div class="container-fluid">

		<div class="row" style="background-color:white;">
			
			<div class="col-lg-3 col-md-3 categories" >
				<div >
					<div class="form-group has-feedback">
						<div class="form">
							<input type="text" id="searchTextField" name="searchTextField" class="form-control input-lg" placeholder="Ingresa una dirección" required/>
						</div>
						<span class="fa fa-search fa-lg form-control-feedback"></span>
						<a href="#" id="miPos"><i id="brujula" class="fa fa-location-arrow"></i> Usar mi posición actual</a>

					</div>

				</div>
				<div class="container-fluid">

					<div class="row hidden-sm  hidden-xs">
					<h4>Categorías</h4>
					<div class="col-lg-6 col-md-6 col-sm-3 p0">

							<div class="btn-cat" data-categorie="" style="background-image: url(http://doondeapp.com/mobile/images/categorias/promodesc.jpg); background-position: 50% 50%; background-size: cover;">
								<div class="opabtn">
								</div>
								<span class="btn-title">Todas</span>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-3 p0">
							<div class="btn-cat" data-categorie="168"  style="background-image: url(http://doondeapp.com/mobile/images/categorias/sushi.jpg); background-position: 50% 50%; background-size: cover;">
								<div class="opabtn">
								</div>
								<span class="btn-title">Sushi</span>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-3 p0">

							<div class="btn-cat" data-categorie="belleza"  style="background-image: url(http://doondeapp.com/mobile/images/categorias/alisado.jpg); background-position: 50% 50%; background-size: cover;">
								<div class="opabtn">
								</div>
								<span class="btn-title">Belleza</span>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-3 p0">

							<div class="btn-cat" data-categorie="comida" style="background-image: url(http://doondeapp.com/mobile/images/categorias/comida.jpg); background-position: 50% 50%; background-size: cover;">
								<div class="opabtn">
								</div>
								<span class="btn-title">Comida</span>
							</div>
						</div>
						
					</div>
				</div>

			</div>
<div class="col-lg-9 col-md-9" style="padding:0;" >
				<div class="map" id="myMap" name="myMap">
				</div>
			</div>
		</div>
	</div>
	<div class="header-filter" id="headerFilter">
		<div class="container-fluid">
			<div class="row text-center"> 
			
 					<div id="cargando"><h3><i class="fa fa-spin fa-spinner"></i> Buscando lugares..</h3></div>
 				</div>
 			</div>
 		</div>

 	</header> 

 	<div class="container-fluid " id="cardContainer">


 	</div>
 	<script type="text/html" id="cardPlace">
 		<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12" >
			
 			<div class="preview panel panel-default promoBtn" data-promo="{{promo_data}}" >
 				<div class="panel-heading">
 					<h3 class="panel-title">{{promo_titulo}}</h3>
 				</div>

 				<div >
 					<figure>
 						<div class="view-promo-div">
 							<div class="btn btn-lg btn-success btn-view-promo">Ver Promoción</div>
 						</div>
 						<div class="image-inner-shadow"></div>
 						<img class="dish-img-thumb" src="{{promo_imagen}}" alt="" />
 					</figure>

 					<div class="panel-body">
 						<div class="dish-price">
 							<span class="price">{{promo_precio}}</span>
 						</div>

 					</div>
 				</div>
				<!--
 				<a href="?v=place&g={{negocio_id}}">
 					<div class="panel-footer">
 						<div class="media">
 							<div class="pull-left">
 								<img class="img-rounded" src="{{negocio_logo}}" >
 							</div>
 							<div class="media-body ng-binding">
 								{{negocio_nombre}}<br>
 								<em class="ng-binding">{{negocio_direccion}}</em>
 							</div>
 						</div>
 					</div>
 				</a>
 				-->
 			</div>
 		</div>
 	</script>

 	<div class="modal fade" id="modalPromotion" role="dialog" aria-labelledby="promocion_titulo" aria-hidden="true">
 		<div class="modal-dialog modal-lg">
 			<div class="modal-content">
 				<div class="modal-header">
 					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i style="font-size: 35px;" class="fa fa-times-circle"></i></span></button>
 					<h3 class="modal-title" id="promocion_titulo">...</h3>
 				</div>
 				<div class="modal-body">
 					<?php
 					include('views/promocion.php');
 					?>
 				</div>
 				<div class="modal-footer">
 					<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
 				</div>
 			</div><!-- /.modal-content -->
 		</div><!-- /.modal-dialog -->
 	</div><!-- /.modal -->


 	<form method="POST" action id="viewPromo">
 		<input type="hidden" name="ff" value="rr">
 		<input type="hidden" name="idCommerce" id="idCommerce">
 	</form>

 	<script type="text/javascript">
 		var userAddress, dataToSearch, formSearch, btnBuscar;
 		btnBuscar = document.getElementById("btnSearch");
 		userAddress = document.getElementById("searchTextField")
 		dataToSearch = document.getElementById("dataToSearch")
 		formSearch =  document.getElementById("formSearch")
 		mypos = document.getElementById("miPos");
 		dataToSearch.value = localStorage.getItem('clave');
 		userAddress.value = localStorage.getItem('addressText');
 		if(dataToSearch!=null){
 			dataToSearch.onkeypress =  function(event){
 				if(event.keyCode==13){
 					fbuscar();
 				}
 			}
 		}
 		btnBuscar.onclick = function(){fbuscar();};
 		function fbuscar(){
 			ga('send', 'event', 'search', dataToSearch.value, localStorage.getItem('addressText'));
 			localStorage.setItem('clave', dataToSearch.value);
 			
 			loadMap();
 			
 		}

 		function load_searcher(){
 			function retrievePrediction(place) {
 				var autocompleteService = new google.maps.places.AutocompleteService;
 				place.name.length > 0 && autocompleteService.getPlacePredictions({
 					input: place.name,
 					offset: place.name.length,
 					types: ["geocode"]
 				}, function(predictions) {
 					if (null != predictions || 0 != predictions.length) {
 						userAddress.value = predictions[0].description;
 						var placesService = new google.maps.places.PlacesService(userAddress);
 						placesService.getDetails({
 							placeId: predictions[0].place_id
 						}, function(detailsResult, placesServiceStatus) {
 							if (placesServiceStatus == google.maps.GeocoderStatus.OK) {
 								var latLng = {
 									lat: detailsResult.geometry.location.lat(),
 									lng: detailsResult.geometry.location.lng()
 								},
 								latLngString = JSON.stringify(latLng);
 								localStorage.setItem("address", latLngString)
 								localStorage.setItem("addressText", predictions[0].description)
 								/*console.log(latLngString)*/
 								dataToSearch.focus()	
 							}
 						})
 					}
 				})
 			}

 			mypos.onclick = function(){getLocation();}

 			function getLocation() {
 				$("#brujula").addClass("fa-spin");
 				if (navigator.geolocation) {
 					navigator.geolocation.getCurrentPosition(showPosition);
 				} else { 
 					alert("Geolocation is not supported by this browser.");
 				}
 			}

 			function showPosition(position) {
 				//console.log(position);
 				var latLng = {
 					lat: position.coords.latitude,
 					lng: position.coords.longitude
 				},
 				latLngString = JSON.stringify(latLng);
 				localStorage.setItem("address", latLngString);
 				//console.log(QueryString.v);
 				//	console.log("estoy en search");
 					marker.setMap(null);
 					marker = new google.maps.Marker({position: {lat: position.coords.latitude, lng: position.coords.longitude }, map: myMap });    
 					myMap.setCenter({lat: position.coords.latitude, lng: position.coords.longitude });  

 				
 				$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+position.coords.latitude+","+position.coords.longitude+"&key=AIzaSyCd4LS0T_Otappn8O9mKYKvGAgWLzuWuSo", function(results){
 					userAddress.value = results.results[0].formatted_address;
 					localStorage.setItem("addressText", userAddress.value);
 					 ga('send', 'event', 'position change', userAddress.value);

 					$("#brujula").removeClass('fa-spin');
 				});
 			}
 			var 
 			locSearchText = localStorage.getItem("addressText");
 			null != locSearchText && (userAddress.value = locSearchText);
 			var autocomplete = new google.maps.places.Autocomplete(userAddress, {
 				types: ["geocode"]
 			}),
 			infowindow = new google.maps.InfoWindow;
 			google.maps.event.addListener(autocomplete, "place_changed", function() {
 				infowindow.close();
 				var place = autocomplete.getPlace();
 				if (void 0 !== place)
 					if (void 0 == place.address_components) retrievePrediction(place);
 				else {
 					var latLng = {
 						lat: place.geometry.location.lat(),
 						lng: place.geometry.location.lng()
 					},
 					latLngString = JSON.stringify(latLng);
 						marker.setMap(null);
 						marker = new google.maps.Marker({position: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}, map: myMap });  
 						myMap.setCenter({lat: place.geometry.location.lat(), lng: place.geometry.location.lng()});  
 					
 					localStorage.setItem("address", latLngString),
 					localStorage.setItem("addressText", userAddress.value);
 					ga('send', 'event', 'position change', userAddress.value);
 					//console.log(latLngString);
 					dataToSearch.focus();
 				}
 			})
 		}
 	</script>

 	<script type="text/javascript">
 		var DmyMap = document.getElementById("myMap"), myMap, myMarkers=[],markerIcon, myInfoWindow,dishes ,
 		 marker, coords, categories, loadCategory=false;
 		var mapOptions, cargandoDom = document.getElementById("cargando"),
 		card = document.getElementById("cardPlace").innerHTML,
 		cardContainer = document.getElementById("cardContainer");
 		var idPromoViewing;	
 		var xmlhttp = new XMLHttpRequest(), loadMap, placesList=[];
 		$(".btn-cat").on('click', function(event){
 			loadCategory=true;
 			categories = $(this).attr("data-categorie");
 			ga('send', 'event', 'category view', $(this).attr("data-categorie"));
 			loadMap();
 		});

 		$("#adquirirPromocion").on('click', function(event){
 			ga('send', 'event', 'promotion', 'click','Adquirir', idPromoViewing);
 			if(user_id_facebook!=null){

 				$("#viewPromo").attr("action", "index.php?v=promotion&p="+idPromoViewing);
 				$("#waitQuiero").removeClass("fa-heart").addClass("fa-spin fa-spinner");
 				<?php if(isset($_SESSION['pidoMail']) && $_SESSION['pidoMail']){ ?>
 					$("#questmail").modal();
 					 ga('send', 'event', 'promotion click','pido mail para Adquirir promotion:'+ idPromoViewing);

 					$("#modalPromotion").modal('hide');
 					$("#btnThisIsMyEmail").on('click', function(){
 						addPostVar("um",$("#myEmail").val(),"viewPromo");
 						$("#viewPromo").submit();
 					});
 					<?php }else{ ?>
 						$("#viewPromo").submit();
 						<?php } ?>
 					}else{
 						addPostVar("act",idPromoViewing,"loginFacebook");
 						addPostVar("idCommerce",$("#idCommerce").val(),"loginFacebook");
 						addPostVar("ff","rr","loginFacebook");
 						ga('send', 'event', 'promotion click','Pido login Facebook promotion'+idPromoViewing);

 						
 						$("#loginModal").modal();
			//$("#modalPromotion").modal('hide');
		}
	}); //attr("href","index.php?v=promotion&p="+placesList[idPromo].promo_id);


 		$("#cardContainer").on('click','.promoBtn', function(event){
		//console.log(placesList[$(this).attr('data-promo')]);
		loadModal($(this).attr('data-promo'));

	});
 		function loadModal(idPromo){
 			idPromoViewing = placesList[idPromo].promo_id;

 			$("#promocion_titulo").text(clearText(placesList[idPromo].promo_titulo));
 			   if(window.innerWidth <= 800 ) {
 			   		$("#promo_imagen").attr("src","http://api.doondeapp.com:1234/image/getMobile/"+idPromoViewing+".jpg");
 			   }else{
 					$("#promo_imagen").attr("src",reformatUrl(placesList[idPromo].promo_imagen));
 				}

 			$("#promo_precio").text(clearText(placesList[idPromo].promo_precio).indexOf("%")>= 0 ? clearText(placesList[idPromo].promo_precio) :("$ "+clearText(placesList[idPromo].promo_precio)+" clp"));
 			$("#promo_texto").html(clearText(placesList[idPromo].promo_texto));
 			$("#negocio_logo").attr("src",reformatUrl(placesList[idPromo].negocio_logo));
 			$("#negocio_direccion").text(clearText(placesList[idPromo].negocio_direccion))
 			.attr("href","http://maps.google.com/?q="+String(placesList[idPromo].lat).trim()+","+String(placesList[idPromo].lng).trim());
 			$("#negocio_nombre").text(clearText(placesList[idPromo].negocio_nombre));
 			$("#negocio_telefono").text("Llamar:"+clearText(placesList[idPromo].negocio_telefono));

			$("#negocio_telefono_btn").attr('href',"tel:"+clearText(placesList[idPromo].negocio_telefono));
			$("#negocio_telefono_btn").on('click', function(){
				statcall(clearText("tel:" + placesList[idPromo].negocio_telefono) + " commerce:" + clearText(placesList[idPromo].negocio_nombre));
			})
 			$("#promo_id").text("Promo id: "+idPromoViewing);
 			$("#idCommerce").val(placesList[idPromo].negocio_id);
			addthis.update('share', 'url', 'http://doonde.cl/index.php?v=promotion&p='+idPromoViewing); 
 			addthis.url = 'http://doonde.cl/index.php?v=promotion&p='+idPromoViewing;
 			$('#map_image').attr('src','https://maps.googleapis.com/maps/api/staticmap?center='+String(placesList[idPromo].lat).trim()+","+String(placesList[idPromo].lng).trim()+'&zoom=16&size=400x220&markers='+String(placesList[idPromo].lat).trim()+","+String(placesList[idPromo].lng).trim()+'&sensor=false') ;
 			ga('send', 'event', 'promotion view','{user: '+user_id_facebook +', promotion: '+ idPromoViewing+'}');

 			$("#modalPromotion").modal();
 		}
 		function updateLocation() {
 			var locDefault = {lat: -33.3954388,lng:-70.6810328 },
 			locSearch = localStorage.getItem("address");
 			coords = locSearch!=null ? JSON.parse(locSearch): locDefault;          
 		}
 		function onGoogleReady() {	
 			load_searcher();
 			updateLocation();
 			mapOptions= {center: {lat: coords.lat,lng: coords.lng }, zoom: 15};
 			myMap  = new google.maps.Map(DmyMap,mapOptions);
 			markerIcon = new google.maps.MarkerImage("images/pin3.png", null, null, null);
 			marker = new google.maps.Marker({position: {lat: coords.lat, lng: coords.lng }, map: myMap });    
 			marker.data = {lat: coords.lat, lng: coords.lng };
 			myMarkers.push(marker);
 			function setAllMap(map) {
 				for (var i = 0; i < myMarkers.length; i++) {
 					myMarkers[i].setMap(map);
 					marker.setMap(map);
 				}
 			}
 			function viewPins(){
 				updateLocation();
 				var maxDistance = 5e3;
 				setAllMap(null);
 				myMarkers = [];

			//if (1 === myMarkers.length) {
				marker = new google.maps.Marker({
					position: {
						lat: coords.lat,
						lng: coords.lng
					},
					animation: google.maps.Animation.DROP,
					map: myMap
				});
				placesList.forEach(function(dish,index) {
					//console.log("recorro",dish);
					var marker = new google.maps.Marker({
						position: {
							lat: Number(dish.lat),
							lng: Number(dish.lng)
						},
						animation: google.maps.Animation.DROP,
						icon: markerIcon,
						map: myMap
						
					});
					marker.pos = index;
					marker.data = dish, myMarkers.push(marker)
					google.maps.event.addListener(marker, 'click', function(e) {
						loadModal(this.pos);
					});
				})
			//} 
			cargandoDom.style.display = 'none';
		}    
		function viewCards(){
			cardContainer.innerHTML="";
			if (placesList.length==0){
				cardContainer.innerHTML="<h3 style='color:gray;width: 100%;text-align: center;'>No tenemos la promoción que buscas... intenta con alguna de las categorías</h3>";
			}else{
				placesList.forEach(function(place,index){
					//console.log(index);
					var placeCard = card.replace(/{{promo_titulo}}/g,truncate(place.promo_titulo,100))
					.replace(/{{promo_id}}/g,place.promo_id)
					.replace(/{{promo_imagen}}/g,/*reformatUrl(place.promo_imagen)*/"http://api.doondeapp.com:1234/image/getMobile/"+place.promo_id+".jpg")
					.replace(/{{promo_precio}}/g, place.promo_precio.indexOf("%")>=0 ?  place.promo_precio : "$ "+ place.promo_precio)
					.replace(/{{promo_texto}}/g,truncate(place.promo_texto,200))
					.replace(/{{negocio_id}}/g,place.negocio_id)
					.replace(/{{negocio_logo}}/g,reformatUrl(place.negocio_logo))
					.replace(/{{negocio_nombre}}/g,clearText(place.negocio_nombre))
					.replace(/{{negocio_direccion}}/g,clearText(place.negocio_direccion))
					.replace("{{promo_data}}", index);
					cardContainer.innerHTML = cardContainer.innerHTML + placeCard;
				});
			}

		}  



		loadMap = function() {
			cargandoDom.style.display = 'block';
			updateLocation();
			var url;
			
			if (loadCategory){
					if(categories.length <1){
						url= ServiceUrl + "/cites/"+coords.lat+"/"+coords.lng;
					}else{
						url= ServiceUrl + "/citesByCategories/"+coords.lat+"/"+coords.lng+"/"+categories;
					}
					loadCategory=false;
			}else{
				if(localStorage.getItem("clave").length>0){
					url= ServiceUrl + "/cites/"+coords.lat+"/"+coords.lng+"/"+localStorage.getItem("clave");
				}else{
					url= ServiceUrl + "/cites/"+coords.lat+"/"+coords.lng;
				}
			}
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

					placesList = JSON.parse(xmlhttp.responseText);
					localStorage.setItem("lastResult", xmlhttp.responseText);
					viewPins();
					viewCards();
				}
			} 	
 			ga('send', 'event', 'search', 'user:' + user_id_facebook +' url:'+ url);

			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		}

		loadMap();

	}


</script>
