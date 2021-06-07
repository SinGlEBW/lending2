<div class="inst__sliders">
  <? 
  
  // $media из getInstMedia.php подключённой в index.php страницы
    foreach ($media->data as $key => $album):{ 
    ?>
      <div class="inst__slider inst__slider--<?=++$key?>">
        <div class="inst__slider-items inst__slider-item--<?=++$key?>">
        <? 
          foreach ($album->children->data as  $objPhoto): {
          ?>
            <img class="inst__slider-item" data-src="<?=$objPhoto->media_url?>" src="#" alt="photoInstagram">
          <?
          }endforeach; 
        ?>
        </div>
        <p class="inst__caption"><?=$album->caption?></p>
      </div> 
    <?
    }endforeach;
  ?>
  
</div>