<div class="inst__sliders">
  <? 
    require_once __DIR__.'/../Services/instMedia.php';
    foreach ($media->data as $key => $album):{ 
    
    ?>
      <div class="inst__slider-box"> 
        <div class="inst__slider inst__slider--<?=++$key?>">
          <div class="inst__slider-items">
          <? 
            foreach ($album->children->data as  $objPhoto): {
            ?>
              <!-- <div class="inst__slider-item" style="background-image: url(<?=$objPhoto->media_url?>)"></div> -->
              <img class="inst__slider-item" src="<?=$objPhoto->media_url?>" alt="photoInstagram">
            <?
            }endforeach; 
          ?>
          </div>
        </div> 
        <p class="inst__caption"><?=$album->caption?></p>
      </div>
    <?
    }endforeach;
  ?>

  
</div>