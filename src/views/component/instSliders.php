<div class="inst__sliders">
  <? 
    require_once __DIR__.'/../../services/getInstMedia.php';
    foreach ($media->data as $key => $album):{ 
    
    ?>
      <div class="inst__slider-box"> 
        <div class="inst__slider inst__slider--<?=++$key?>">
          <div class="inst__slider-items">
          <? 
            foreach ($album->children->data as  $objPhoto): {
            ?>
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