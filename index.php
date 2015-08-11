<?php
session_start();
//session_destroy();
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);
include ('functions.php');
$serverUrl = "http://api.doondeapp.com:1234";///*/"http://localhost:1234";
$noexisto=false;
//echo "--[".$_SESSION['email']."]--"; 

$share_content = "Doonde es una Guía de ofertas y promociones cercanas a  ti. Descubrelas.";
$share_url = "http://doondeapp.com";
$share_image = "http://doondeapp.com/card_share.png";
$title = "Doonde | Promociones y ofertas";
$verPromo = false;
$data_promo = "";
function loadPromo($idPromo){
    global $url, $serverUrl, $data_promo, $share_content, $share_image,$share_url, $title, $verPromo;
    $url= $serverUrl."/promotion/".$idPromo;
    $data_promo = json_decode( get_data_url( $url));
    if($data_promo->status == "ERROR"){
      header("Location: index.php");
    }
    $share_content = $data_promo->results[0]->promo_titulo."| $".$data_promo->results[0]->promo_precio." CLP | Doonde";
    if(strpos($data_promo->results[0]->promo_imagen,"http://") === false){
      $data_promo->results[0]->promo_imagen="http://doondeapp.com/admin/".$data_promo->results[0]->promo_imagen;
    }
    $share_image = $data_promo->results[0]->promo_imagen;
    $share_url = "http://doondeapp.com/index.php?v=promotion&p=".$idPromo;
    $title = $share_content;
    $verPromo = true;
}

if(isset($_POST['v']) && $_POST['v'] == 'login'){
  $url = $serverUrl."/login.php?idFacebook=".urlencode($_POST['idFacebook'])."&name=".urlencode($_POST['name'])."&mail=".urlencode($_POST['email']);
  $data_user = json_decode(get_data_url($url));
  $_SESSION['idFacebook'] = $_POST['idFacebook'];
  $_SESSION['email'] = $_POST['email'];
  $_SESSION['user'] = $_POST['name'];
  //echo var_dump($data_user);
  if($data_user->status == 'OK' || $data_user->status == 'NO_EXIST'){
    //echo 'Uasuario:'.$data_user->results[0]->id;
    $_SESSION['user'] = $_POST['name'];
    $_SESSION['idFacebook'] = $_POST['idFacebook'];
    //http://graph.facebook.com/1083053111711843/picture?type=large
    $_SESSION['photo'] = "https://graph.facebook.com/".$_POST['idFacebook']."/picture?type=small";
    $_SESSION['email'] = $_POST['email'];
    if(strrpos($_POST['email'], '@')=== false){ 
      $_SESSION['pidoMail']=true;
    }else{
      $_SESSION['pidoMail'] = false;
    }
    $_SESSION['idUser'] = $data_user->results[0]->id;
  }else{
    $noexisto = true;
  }
  if(isset($_POST['idCommerce']) && $_POST['idCommerce']!=''){
    loadPromo($_POST['act']);
  }
}




if(isset($_GET['v'])){
  if($_GET['v']=='promotion'){
   loadPromo($_GET['p']);
  }
}
//echo "--------------".$_SESSION['idUser'];

?>
<!DOCTYPE html>
<html lang="es" itemscope itemtype="https://schema.org/">
<head>
  <meta charset="UTF-8">
  <title><?php echo $title;?></title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <meta content="yes" name="apple-mobile-web-app-capable">

  <!-- Icons -->
  <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">

  <!-- Search Engines -->
  <meta name="author" content="Doonde">
  <meta name="description" content="<?php echo $share_content;?>">
  <meta name="HandheldFriendly" content="True" />
  <meta name="MobileOptimized" content="320" />
  <link href="humans.txt" rel="author">

  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@DoondeCL">
  <meta name="twitter:creator" content="@DoondeCL">
  <meta name="twitter:description" content="<?php echo $share_content;?> en Doonde.cl">
  <meta name="twitter:title" content="<?php echo $share_content;?>">
  <meta name="twitter:image" content="<?php echo $share_image;?>">

  <!-- Facebook Open Graph -->
  <meta property="og:site_name" content="Doonde">
  <meta property="og:type" content="website">
  <meta property="og:url" content="<?php echo $share_url;?>">
  <meta property="og:description" content="Doonde | Promociones y Ofertas">
  <meta property="og:title" content="<?php echo $share_content;?>">
  <meta property="og:image" content="<?php echo $share_image;?>">
  <meta property="fb:app_id" content="156647277821841">
  <meta property="fb:admins" content="ldc69,100000214947800">

  <!-- Google + -->
  <meta itemprop="name" content="Doonde | Promociones y Ofertas">
  <meta itemprop="description" content="<?php echo $share_content;?>">
  <meta itemprop="image" content="<?php echo $share_image; ?>">


  <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,700' rel='stylesheet' type='text/css'>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
  <script src="js/platform.js"></script>
  <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-557cd14f0ae1eb09" async="async"></script>



  <link rel="stylesheet" href="css/style.min.css">
  <link rel="stylesheet" href="css/bootstrap-social.css">

  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-54096121-2', 'auto');
    ga('send', 'pageview');

  </script>
  <script>
    var ServiceUrl = "<?php echo $serverUrl;?>";
    var user_id_facebook = <?php if(isset($_SESSION['idFacebook'])){echo $_SESSION['idFacebook'];}else{echo 'null'; }?>;
  </script>


<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','//connect.facebook.net/en_US/fbevents.js');

fbq('init', '912098382166290');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=912098382166290&ev=PageView&noscript=1"
/></noscript>
<script>
  function truncate(text, length, end) {
      try {
        var rr =  (isNaN(length) && (length = 10), void 0 === end && (end = "..."), text.length <= length || text.length - end.length <= length ? text : String(text).substring(0, length - end.length) + end)
        return decodeURIComponent(escape(rr));
      }
      catch(err){
        //console.log(err, text);
        return text;
      }
    }
    function clearText(text){
      try{
        return decodeURIComponent(escape(""+text))
      }catch(err){
        //console.log(err)
        return text;
      }
    }
    function reformatUrl(text, end) {
      try {
        return text.indexOf("http://") >= 0 ? text: "http://doondeapp.com/admin/"+text;            
      }
      catch(err){
        //console.log(err);
        return text;
      }
    }
    var QueryString = function () {
      // This function is anonymous, is executed immediately and 
      // the return value is assigned to QueryString!
      var query_string = {};
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
              query_string[pair[0]] = pair[1];
            // If second entry with this name
          } else if (typeof query_string[pair[0]] === "string") {
            var arr = [ query_string[pair[0]], pair[1] ];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
          } else {
            query_string[pair[0]].push(pair[1]);
          }
        } 
        return query_string;
      } ();

</script>
</head>
<body itemscope itemtype="http://schema.org/WebPage">
<!--[if lt IE 8]>
  <div class="alert alert-warning">
    You are using an <strong>outdated</strong> browser.
    Please <a href="http://browsehappy.com/">upgrade your browser</a>
    to improve your experience.
  </div>
  <![endif]-->

  <!-- Content goes here -->
  <?php include('views/header.php');
  if(isset($_GET['v'])){
    if($_GET['v']=='search' && $verPromo==false){
      include('views/maps.php');
    }   
  
    if($verPromo==true){
      include('views/promotion.php');
    }

  }else{
      include('views/home.php');
    
  }
  ?>


<!--[if lt IE 9]>
	<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.0.5/es5-shim.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js"></script>
  <![endif]-->


  <?php include('views/footer.php');?>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCd4LS0T_Otappn8O9mKYKvGAgWLzuWuSo&v=3&libraries=places&callback=onGoogleReady"></script>

  <script type="text/javascript">


    function loadScript() {


    }
    function loadVars(){


    }

    function addPostVar(name, value, form){
      var input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", name);
      input.setAttribute("value",value);
      document.getElementById(form).appendChild(input);
    }
    


      window.onload = loadScript();
      document.ready = loadVars();


    </script>


    <script>
      var status_facebook = false;
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '156647277821841',
          cookie     : true,  
          xfbml      : true,  
          version    : 'v2.2' 
        });

        FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {

          }       
        });

      };
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/es_LA/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));


    </script>
  </body>
  </html>
