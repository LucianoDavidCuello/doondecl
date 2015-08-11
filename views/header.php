<div class="navbar navbar-default navbar-static-top">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
      <span class="fa fa-bars"></span>
    </button>
    <a href="index.php">
       <img  src="http://doondeapp.com/img/logo.png" alt="Doonde" class="logo-navbar" /> 
    </a>

  </div>
  <div class="col-lg-6 col-md-6 top-search-bar" id="topSearchBar">
    <div class="input-group">
    
      <input type="text" class="form-control" id="dataToSearch" placeholder="Buscar promoción...">
      <span class="input-group-btn">
        <button class="btn btn-default" id="btnSearch" type="button">Buscar</button>
      </span>
    </div><!-- /input-group -->
  </div>
<div class="navbar-collapse collapse">
    
    <ul  class="nav navbar-nav pull-right">
      <?php if(!isset($_SESSION['user']) || strlen($_SESSION['user'])<2 ){?>
      <li class="is_no_login"><a class="btn btn-success btn-navbar" data-toggle="modal" data-target="#loginModal" ><span class="fa fa-sign-in"></span>Entra</a></li>

      <?php }else{ ?>

        <li style="margin-top:10px;"> <img class="imageUser" src="<?php echo $_SESSION['photo'];?>"> <?php echo $_SESSION['user'];?></li>


      <?php } ?>
      <li><a class="btn btn-primary btn-navbar" href="/admin">
        <span class="fa fa-map-marker"></span>
        Agrega tu negocio
      </a></li>
    </ul>
    
  </div>

</div>
