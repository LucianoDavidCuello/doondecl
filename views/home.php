
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
  .greatCommerces img {
    width: 100%;
    border: 5px solid;
    border-radius: 50%;
    box-shadow: 0px 0px 21px 0px #333;
  }
  .greatCommerces {
    cursor: pointer;
  }
</style>
<header class="Header"> 
  <!--<figure class="Header-brand-img"> <img src="http://doondeapp.com/img/logo.png" alt="DoondeApp" /> </figure>--> 
  
  <h2 class="Header-brand-h2">MIRA LAS PROMOCIONES QUE TENEMOS<br> CERCA DE TÍ</h2> 
  <br>  
  <div class="container-fluid">

   <?php include('views/buscar.php');  ?>

 </div>

 <div class="downloadApp">
   <a target="_blank" href="https://play.google.com/store/apps/details?id=com.neotecsoft.doonde_v1.app">
    <img alt="Android app on Google Play"
    src="https://developer.android.com/images/brand/es-419_app_rgb_wo_45.png" />
  </a>
  <a target="_blank" href="https://itunes.apple.com/us/app/doonde-promociones-y-ofertas/id987750054?l=es&ls=1&mt=8">
    <img alt="Iphone App on Apple Store"
    src="appstore.svg" style="height:45px;" />
  </a>
</div>
<div class="landing-video"> 
</div>
<!--<nav class="Header-loginlinks"> <ul> <li><a href="/login" class="linkToLoginForm">Entrar</a></li> <li><a href="/signup" class="linkToRegisterForm">Crea una cuenta</a></li> </ul> </nav>-->
<span class="bottom-arrow fa-stack fa-lg" onclick="scrollDown()">
  <i class="fa fa-circle fa-stack-2x"></i> 
  <i class="fa fa-angle-double-down fa-stack-1x fa-inverse"></i>
</span> 
</header> 
<!-- Marketing copy --> 

<div class="container-fluid bg-landing bg-gray">
  <div class="container">

    <div class="row text-center"> 
     <div class="col-sm-4">
       <span class="marketing fa fa-map-marker"></span> 
       <h2>Busca</h2> 
       <p> Busca y encuentra promociones cercanas.</p> 
     </div> 

     
     <div class="col-sm-4"> 
       <span class="marketing fa fa-gift"></span> 
       <h2>Elige</h2> 
       <p> Elige la promoción que más te guste.</p> 
     </div> 
     <div class="col-sm-4"> 
      <span class="marketing fa fa-rocket"></span> 
      <h2>Canjea</h2> 
      <p> Dirígete al comercio y obtén tu promoción</p> 
    </div> 
  </div> 
</div> 
</div>

<div class="container-fluid">
  <div class="row text-center" style="background-color:#ffffff;">
    <br>
    <h2><i class="fa fa-star"></i> Destacados del día <i class="fa fa-star"></i></h2>
    <br>
    <div class="container-fluid " id="cardContainer">


    </div>
    
  </div> 
</div>
<div class="container-fluid">
  <div class="row text-center" style="background-color:rgba(2, 2, 2, 0.05);">
    <br>
    <h2><i class="fa fa-star"></i> Comercios destacados <i class="fa fa-star"></i></h2>
    <br>
    <div class="container-fluid " id="commerceContainer">


    </div>
    <br>
  </div> 
</div>
<div class="container-fluid">
  <div class="row text-center" style="background-color:#ffffff;padding:30px;">
    <br>
    <div class="col-md-offset-1 col-md-2 col-xs-4">
      <a href="http://incubauc.cl/estos-son-los-ganadores-del-geek-camp-7/" target="_blank"><img src="img/geek.png" style="width:100%;"> </a>
    </div>
    <div class="col-md-2 col-xs-4">
      <a href="http://ce.entel.cl/aplicaciones/posts/doonde-app" target="_blank"><img src="img/entel.png" style="width:100%;"></a>
    </div>
    <div class=" col-md-2 col-xs-4">
      <a href="https://developers.google.com/startups/" target="_blank"><img src="img/gdl.png" style="width:100%;"></a>
    </div>
    <div class=" col-md-2 col-xs-4">
      <a href="http://fbstart.com/" target="_blank"><img src="img/fbs.png" style="width:100%;"></a>
    </div>
    
    <div class="col-md-2 col-xs-4">
      <a href="https://www.microsoft.com/bizspark/" target="_blank"><img src="img/biz.png" style="width:100%;"></a>
    </div>
    <br>
  </div> 
</div>
<script type="text/html" id="cardCommerce">
  <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6">
    <div class="greatCommerces" data-commerce="{{nombre}}">
      <img src="{{logo}}">
      <span>{{nombre}}</span>
      <br>
    </div>
  </div>
</script>

<script type="text/html" id="cardPlace">
  <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12" >

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

        <div class="panel-body" >
          <span class="price">{{promo_precio}}</span>

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

<script>
  var card = document.getElementById("cardPlace").innerHTML, coords,locSearch, xmlhttp = new XMLHttpRequest(),
  cardContainer = document.getElementById("cardContainer"), cardCommerce = document.getElementById("cardCommerce").innerHTML,
  commerceContainer = document.getElementById("commerceContainer"), commerceConnection = new XMLHttpRequest(), placesList, 
  commerceList;
  function updateLocation() {
    var locDefault = {lat: -33.3954388,lng:-70.6810328 },
    locSearch = localStorage.getItem("address");
    coords = locSearch!=null ? JSON.parse(locSearch): locDefault;          
  }
  function viewCards(){
    cardContainer.innerHTML="";
    if (placesList.length==0){
      cardContainer.innerHTML="<h3 style='color:gray;width: 100%;text-align: center;'>Pronto pondremos nuevas promociones destacadas</h3>";
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
  function viewCardsCommerces(){
    commerceContainer.innerHTML="";
    if (commerceList.length==0){
    }else{
      commerceList.results.forEach(function(place,index){
          //console.log(index);
          var placeCard  = cardCommerce
                          .replace(/{{logo}}/g,reformatUrl(place.logo))
                          .replace(/{{nombre}}/g,clearText(place.nombre))
                          ;
          commerceContainer.innerHTML = commerceContainer.innerHTML + placeCard;
        });
    }

  }  
  loadDestacado = function() {
    updateLocation();
    var url= ServiceUrl + "/cites/"+coords.lat+"/"+coords.lng+"/destacada";

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

        placesList = JSON.parse(xmlhttp.responseText);
        viewCards();
      }
    }   

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    commerceConnection.onreadystatechange = function(){
      if(commerceConnection.readyState == 4 && commerceConnection.status == 200){
        commerceList = JSON.parse(commerceConnection.responseText);
        viewCardsCommerces();
      }
    }
    commerceConnection.open("GET",ServiceUrl + "/greatCommerces",true);
    commerceConnection.send();

  }

  loadDestacado();
  $("#cardContainer").on('click','.promoBtn', function(event){
    //console.log(placesList[$(this).attr('data-promo')]);
    window.location.href = "index.php?v=promotion&p="+placesList[$(this).attr('data-promo')].promo_id;

  });
  $("#commerceContainer").on('click','.greatCommerces', function(event){
    //console.log(placesList[$(this).attr('data-promo')]);
    localStorage.setItem('clave', $(this).attr('data-commerce'));
    window.location.href = "search";

  });
  $("#topSearchBar").hide();
  var scrollDown = function() {
    console.log(window.outerHeight);
    window.scrollTo(0,window.outerHeight);
  }
  function onGoogleReady() {
    load_searcher();
  }
</script>