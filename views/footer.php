<div id="descarga-app" class="container-fluid hide" style="
    position: fixed;
    bottom: 0px;
    height: 80px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.57);
    color: white;
    padding-top:15px;
    z-index: 999;
">
  <div id="descarga-android" class="row hide">
    <div class="col-xs-2">
      <h3 class="close-popup"><i class="fa fa-times"></i></h3>
    </div>
         <a target="_blank" href="https://play.google.com/store/apps/details?id=com.neotecsoft.doonde_v1.app">

    <div class="col-xs-1">
    </div>
    
    <div class="col-xs-6" style="padding-top:7px;">
          <img alt="Android app on Google Play"
          src="https://developer.android.com/images/brand/es-419_app_rgb_wo_45.png" />
    </div>
    </a>
  </div>

   <div id="descarga-ios" class="row hide">
    <div class="col-xs-2">
      <h3 class="close-popup"><i class="fa fa-times"></i></h3>
    </div>
        <a target="_blank" href="https://itunes.apple.com/us/app/doonde-promociones-y-ofertas/id987750054?l=es&ls=1&mt=8">

    <div class="col-xs-1">
    </div>
    
    <div class="col-xs-6" style="padding-top:7px;">
          <img alt="Iphone App on Apple Store"
          src="appstore.svg" style="height:45px;" />
    </div>
    </a>
  </div>

</div>
<script>
if(localStorage.getItem("popup") == 0){

}else{
  if(platform.os.family === "Android"){
    $("#descarga-app").removeClass('hide');
    $("#descarga-android").removeClass('hide');
  }
  if(platform.os.family === "iOS"){
    $("#descarga-app").removeClass('hide');
    $("#descarga-ios").removeClass('hide');
  }

}
$(".close-popup").on('click', function(){
    localStorage.setItem("popup",0);
    $("#descarga-app").addClass('hide');

});
function statcall(telefono){
  console.log(telefono);
  ga('send', 'event', 'call commenrce',''+ telefono);
}
</script>
<footer class="Footer">
	
	<div class="row">
		<div class="col-sm-3">
			<img src="http://doondeapp.com/img/logo.png"><br>

		</div>
		<div class="col-sm-3 Footer-links" >
			<strong>Promociona tu negocio:</strong><br>
			<a href="mailto:contaco@doondeapp.com">contacto@doondeapp.com</a><br>
			<a href="phone:+56972518446">tel: +56 972518446</a>
		</div>
		<div class="col-sm-3 Footer-links">
			<strong>Social:</strong><br>

			<a target="_blank" href="https://www.facebook.com/DoondeApp"><i class="fa fa-facebook"></i> Facebook</a><br>
			<a target="_blank" href="https://twitter.com/DoondeCL"><i class="fa fa-twitter"></i> Twitter</a>    <br>
		</div>
		<div class="col-sm-3 Footer-links">
		<a href="http://admin.doondeapp.com">Tienes un negocio?</a><br>
		<a href="#"  data-toggle="modal" data-target="#myModal">Términos y condiciones</a><br>
		
		</div>
	</div>

</footer>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Términos y condiciones</h4>
      </div>
      <div class="modal-body">
      <?php include('terms.php');?>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Entendí</button>
      </div>
    </div>
  </div>
</div>
  <form id="loginFacebook" method="post" action="#"></form>
<?php if(!isset($_SESSION['user']) || strlen($_SESSION['user'])<2 ){?>

<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Iniciar Sesión</h4>
      </div>
      <div class="modal-body">
      	<strong>Al iniciar sesión en Doonde podrás:</strong><br>
      	<ul>
      	<li>Acceder a la promociones exclusivas.</li>
      	<li>Revisar tus promociones en cualquier momento</li>
      	</ul>
      	<hr>
        <a class="btn btn-social btn-facebook" onclick="fb_login();">
          <i class="fa fa-facebook"></i>
          Iniciar con Facebook
        </a>
	

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="questmail" role="dialog" aria-labelledby="promocion_titulo" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i style="font-size: 35px;" class="fa fa-times-circle"></i></span></button>
        <h3 class="modal-title" id="promocion_titulo">Tu email no está registrado</h3>
      </div>
      <div class="modal-body">
        <h4>Necesitamos tu email para enviarte la información de esta promoción</h4>
        <div class="row">
        <div class="col-lg-9">
          <input type="text" id="myEmail" class="form-control input-lg" name="myEmail" placeholder="tuemail@correo.com">
        </div>
        <div class="col-lg-3">
          <div id="btnThisIsMyEmail" class="btn btn-success btn-lg">Continuar</div>
        </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->



<script>
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' , response);
      addPostVar("v","login","loginFacebook");
      addPostVar("idFacebook",response.id,"loginFacebook");
      addPostVar("email",response.email,"loginFacebook");
      addPostVar("name",response.name,"loginFacebook");
      if(validateEmail( response.email) ){
        document.getElementById("loginFacebook").submit();
      }else{
        $("#questmail").modal();
           ga('send', 'event', 'promotion click','pido mail para Adquirir promotion:'+ idPromoViewing);

          $("#modalPromotion").modal('hide');
         
      }
      
    });
  }
   $("#btnThisIsMyEmail").on('click', function(){
            addPostVar("um",$("#myEmail").val(),"loginFacebook");
            $("#loginFacebook").submit();
          });
  function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
  window.fbAsyncInit = function() {
    
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  };
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      testAPI();
    } else if (response.status === 'not_authorized') {
      
    } else {
      
    }
  }

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  function fb_login() {
    FB.login( function() {
      checkLoginState();
    }, { scope: 'email,public_profile' } );
}
  </script>

<?php } ?>