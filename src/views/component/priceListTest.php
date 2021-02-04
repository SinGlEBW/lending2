<!-- Этот кусок для тестов -->
<div class="price-list" id="js-p-list">
  <div class="price-list__content">
     <h3 class="price-list__title">Прайс лист</h3>
     <i class="price-list__close" id="js-p-close"></i>
    <table class="price-list__table" id="js-p-table">
      <tbody class="price-list__table-body" id="js-p-tableBody">
        <?
          require_once __DIR__.'/../../services/getPriceList.php';
          
          foreach ($objPriceList as $arrTables) {
            
            if($arrTables->id === 1) {
              
            ?>
              <tr class="price-list__row-head-title" >
                <th class="price-list__cell-head-title" colspan="4"><?=$arrTables->services?></th>
              </tr>
              <tr class="price-list__row-info" >
                <td class="price-list__cell-info">Наименование</td>
                <td class="price-list__cell-info">Ед.изм.</td>
                <td class="price-list__cell-info">Цена(руб.)</td>
                <td class="price-list__cell-info">Кол-во</td>
                <td class="price-list__cell-info">Сумма</td>
              </tr>
            <?
            }else {
            ?>
              <tr class="price-list__row">
                <td class="price-list__cell"><?=$arrTables->services?></td>
                <td class="price-list__cell"><?=$arrTables->unit?></td>
                <td class="price-list__cell js-p-rub"><?=$arrTables->price?></td>
                <td class="price-list__cell">
                  <input class="price-list__input js-p-input" type="text" name="dataCell">
                </td>
                <td class="price-list__cell js-p-sum">0</td>
              </tr>
            <?
            }
          }
        ?> 
      </tbody>
    </table>
    <div class="price-list__out">
      <span class="price-list__total">Итого:</span>
      <span class="price-list__result" id="js-p-result">0</span>
    </div>
  </div>
</div>