

<?php 
if(strpos($data_promo->results[0]->commerces[0]->logo, "http://") === false){
  $data_promo->results[0]->commerces[0]->logo = "http://doondeapp.com/admin/".$data_promo->results[0]->commerces[0]->logo;
}
if(isset($_POST['um']) && strlen($_POST['um'])>3){
  $_SESSION['email'] = $_POST['um'];
  $_SESSION['pidoMail']= false;
}
if(isset($_POST['ff']) && $_POST['ff']=='rr'){

  $idCommerce = $_POST['idCommerce'];
  $url = $serverUrl."/user/addMyPromotion/".$data_promo->results[0]->promo_id."/".$idCommerce."/".$_SESSION['idFacebook'];
  $res = get_data_url($url);
  send_email_promo($_SESSION['email'], $_SESSION['user'],  utf8_decode($data_promo->results[0]->promo_titulo),  utf8_decode($data_promo->results[0]->promo_texto),$data_promo->results[0]->promo_imagen,$data_promo->results[0]->promo_precio, $data_promo->results[0]->promo_precio_antes, $data_promo->results[0]->commerces );
}

?>
<style>
  .promo_image{
    width: 80%;
    border-radius: 4px;
  }
  .promo_precio{
    font-family: 'Roboto';
    font-weight: 600;
    color: #1dcc6b;
  }
</style>

<div class="master-div-promotion">

  <h1 style="text-align: center;"><?php echo $data_promo->results[0]->promo_titulo;?></h1>
  <div class="container-fluid">

    <div class="row">
      <div class="col-md-6">
        <div class="promo_image preview panel" id="promo_imagen" style="background: url(<?php echo $data_promo->results[0]->promo_imagen;?>);height: 100%; min-height: 600px; width: 100%; background-size: cover; background-position: 50% 50%; background-repeat: no-repeat;">
        </div>
      </div>
      <div class="col-md-6">
        <div class="row">
          <h2 class="promo_precio" id="promo_precio">$ <?php echo $data_promo->results[0]->promo_precio;?> CLP</h2>
          <h3 class="promo_precio_antes" ><?php 
            if(strlen($data_promo->results[0]->promo_precio_antes)>1){
              echo "$ ".$data_promo->results[0]->promo_precio_antes." CLP";
            }
            ?></h3>
            <hr>
            <div style="text-align:center;">
            <!-- Go to www.addthis.com/dashboard to customize your tools -->
            <div class="addthis_sharing_toolbox"></div>
            <?php 
            if(isset($_POST['ff']) && $_POST['ff']=='rr'){ }else{?>
            <div class="btn btn-success btn-lg" id="quieroPromo" style="font-size: 20px; height: auto;">
              <i id="waitQuiero" class="fa fa-heart"></i>
              <strong>Quiero esta promoción!</strong>
            </div>
            <?php } ?>
            </div>
            <hr>
          </div>
          <div class="row">
            <div id="promo_texto" style="padding:10px;">
             <?php echo str_replace("\n", "<br>",$data_promo->results[0]->promo_texto);?>
           </div>
           <hr>
         </div>
         <div class="row">
          <div class="preview panel panel-default" >
            <div class="panel-footer">

              <div class="media">
                <div class="pull-left">
                  <img class="img-rounded" id="negocio_logo" src="<?php echo $data_promo->results[0]->commerces[0]->logo;?>" >
                </div>
                <div class="media-body ng-binding" style="height:auto;max-height: 115px;overflow-y: scroll;">
                  <h4><?php echo $data_promo->results[0]->commerces[0]->nombre;?></h4>
                  <?php foreach ($data_promo->results[0]->commerces as  $value) {?>
                  <a onclick="statcall('tel: <?php echo $value->telefono;?> commerce:<?php echo $data_promo->results[0]->commerces[0]->nombre;?>');" class="btn btn-default" href="tel:<?php echo $value->telefono;?>"><strong><i class="fa fa-phone"></i> Llamar: <?php echo $value->telefono;?></strong></a><br>

                  <a href="http://maps.google.com/?q=<?php echo $value->lat;?>,<?php echo $value->lng;?>" target="_blank" id="negocio_direccion"><i class="fa fa-map-marker"></i> <?php echo $value->direccion;?>
                  </a><br>
                  <hr style="margin: 5px;">
                  <?php } ?>
                </div>

              </div>
                            <img style="width:100%;" src="https://maps.googleapis.com/maps/api/staticmap?center=<?php echo $data_promo->results[0]->commerces[0]->lat;?>,<?php echo $data_promo->results[0]->commerces[0]->lng;?>&zoom=15&size=420x150&markers=<?php echo $data_promo->results[0]->commerces[0]->lat;?>,<?php echo $data_promo->results[0]->commerces[0]->lng;?>&sensor=false">

            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>

</div>

<div class="modal fade" id="felicidades" role="dialog" aria-labelledby="promocion_titulo" aria-hidden="true">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i style="font-size: 35px;" class="fa fa-times-circle"></i></span></button>
        <h3 class="modal-title" id="promocion_titulo">Felicitaciones!!!</h3>
      </div>
      <div class="modal-body" style="text-align: center; font-family: 'Roboto'; ">
        <h3>Se ha enviado un email con los datos para usar esta promoción</h3>
        También puedes revisarlo desde <strong>"Promociones guardadas"</strong> dentro de la applicación de <strong>Doonde</strong><br>
        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.neotecsoft.doonde_v1.app">
          <img alt="Android app on Google Play"
          src="https://developer.android.com/images/brand/es-419_app_rgb_wo_45.png" />
        </a>
        <a target="_blank" href="https://itunes.apple.com/us/app/doonde-promociones-y-ofertas/id987750054?l=es&ls=1&mt=8">
          <img alt="Iphone App on Apple Store"
          src="appstore.svg" style="height:45px;" />
        </a>
        <br>
        <br>
        <strong>No te olvides compartir para que otros también disfruten de esta promoción</strong>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

 <form method="POST"  id="viewPromo">
    <input type="hidden" name="ff" value="rr">
    <input type="hidden" name="idCommerce" value="<?php
     echo $data_promo->results[0]->commerces[0]->id;
     ?>">
    
  </form>
<script>
$("#topSearchBar").show()
$("#dataToSearch").val(localStorage.getItem('clave'));
$("#btnSearch").on('click', function(){
      localStorage.setItem('clave', $("#dataToSearch").val());
      window.location.href = 'search';
});

  <?php 
  if(isset($_POST['ff']) && $_POST['ff']=='rr'){ ?>
    
    $("#felicidades").modal("show");
    ga('send', 'event', 'promotion download', 'promocion adquirida user:'+ user_id_facebook, <?php echo $data_promo->results[0]->promo_id;?>);
    <?php }else{ ?>
      ga('send', 'event', 'view promotion link', 'view', <?php echo $data_promo->results[0]->promo_id;?>);
      $("#quieroPromo").on('click', function(event){

        if(user_id_facebook != null){
          $("#waitQuiero").removeClass("fa-heart").addClass("fa-spin fa-spinner");
          $("#viewPromo").submit();
        }else{
            addPostVar("act",<?php echo $data_promo->results[0]->promo_id;?>,"loginFacebook");
            addPostVar("idCommerce",<?php echo $data_promo->results[0]->commerces[0]->id; ?>,"loginFacebook");
            addPostVar("ff","rr","loginFacebook");
          $("#loginModal").modal();
        }
      });

    <?php } ?>
    $(document).ready(function($) {
      addthis.update('share', 'url', 'http://doonde.cl/index.php?v=promotion&p=<?php echo $data_promo->results[0]->promo_id; ?>'); 
    });
    function onGoogleReady(){}
  </script>

