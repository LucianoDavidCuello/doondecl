
	<div class="row">

			<div class="col-sm-6 col-lg-4 col-lg-offset-2">
				<input type="text" id="searchTextField" name="searchTextField" class="form-control input-lg" placeholder="Ingresa una dirección" required="" autocomplete="off">
				<a href="#" id="miPos"><i id="brujula" class="fa fa-location-arrow"></i> Usar mi posición actual</a>

			</div> 
			<div class="col-sm-4 col-lg-3">  
				<input type="text" id="searchDato" name="searchDato" submit="" class="form-control input-lg" placeholder="¿Qué buscas? Pizza, sushi, peluquería...">

			</div>
			<div class="col-sm-2">
				<div id="btnBuscar" class="btn btn-default btn-lg">Buscar</div>
			</div>
		
	</div>

<script type="text/javascript">
	var userAddress, dataToSearch, formSearch, btnBuscar;
	btnBuscar = document.getElementById("btnBuscar");
	userAddress = document.getElementById("searchTextField")
	dataToSearch = document.getElementById("searchDato")
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
		localStorage.setItem('clave', dataToSearch.value);
		window.location.href='search';		
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
							console.log(latLngString)
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
			console.log(position);
			var latLng = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			},
			latLngString = JSON.stringify(latLng);
			localStorage.setItem("address", latLngString); 
			console.log(QueryString.v);
			
			$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+position.coords.latitude+","+position.coords.longitude+"&key=AIzaSyCd4LS0T_Otappn8O9mKYKvGAgWLzuWuSo", function(results){
				console.log(results.results[0].formatted_address);
				userAddress.value = results.results[0].formatted_address;
				localStorage.setItem("addressText", userAddress.value);
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
			
				localStorage.setItem("address", latLngString),
				localStorage.setItem("addressText", userAddress.value);
				console.log(latLngString);
				dataToSearch.focus();
			}
		})
	}
</script>