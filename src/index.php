<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="utf-8" >
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1" >

  <link rel="stylesheet" href="./css/style.min.css" />
  <style>
    .xdebug-error, .xdebug-var-dump{ font-size: 25px; }
    /* .xdebug-var-dump i { color: #77A8C6; } */
    
  </style>
  <title>"Electric Staff"</title>
</head>

<body>

  <header class="header">
    <div class="header__items">

      <a class="header__phone" href="tel:+79024058000">+7(902)405-80-00</a>
      <div class="header__social">
        <a class="header__link" href="#">
          <span class="header__link-name header__link-name--whatsapp">WhatsApp</span>
          <object class="header__link-icon" data="./img/header/whatsapp.svg" type="image/svg+xml">WhatsApp</object>
        </a>
        <a class="header__link" href="#">
          <object class="header__link-icon" data="./img/header/instagram.svg" type="image/svg+xml">Instagram</object>
          <span class="header__link-name header__link-name--instagram">Instagram</span>

        </a>
      </div>
      <button class="header__price-btn js-ajax-req">Прайс-лист</button>
      <!-- <div class="header__price-list js-data"></div> -->

    </div>
  </header>

  <section class="main" style="background-image: url(./img/main/bg.jpg);">
    <div class="container">
      <div class="main__inner">
        <div class="main__top">
          <object class="logo" style="stroke:aliceblue" data="./img/main/logo.svg" type="image/svg+xml">Лого</object>
        </div>
        <div class="main__middle">
          <h1 class="main__title">

            <span class="main__title-start">ЭЛЕКТРО/</span>МОНТАЖНЫЕ</br>РАБОТЫ

            <!-- <span class="main__title-end"></span> -->
          </h1>
          <p class="main__slogan">Мы работаем для Вас. И с максимальным вниманием относимся к каждому клиенту</p>
        </div>
        <div class="main__bottom">
          <!-- <button class="header__btn-link">Узнать адрес</button>
          <object class="mouse-icon" data="./img/mouse.min.svg" type="image/svg+xml">mouse</object> -->
          <button class="next-slider-btn"></button>
        </div>
      </div>
    </div>
  </section>

  <section class="advantages">
    <div class="container">
      <h2 class="title-two">ПОЧЕМУ <span class="title-two__end">МЫ?</span></h2>
      <p class="subtitle">Почему за проведение электромонтажных работ обращаются к нам?</p>

      <div class="cards">
        <div class="card card__one">
          <object class="card__icon" data="./img/advantages/cart1.svg" type="image/svg+xml"></object>
          <h4 class="card__title">ДОСТУПНЫЕ ЦЕНЫ</h4>
          <p class="card__text">Стоимость электромонтажных работ ниже рыночной на 10-15% за счет прямого сотрудничества
            снами – без посредников и без накруток.</p>
        </div>
        <div class="card card__two">
          <object class="card__icon" data="./img/advantages/cart2.svg" type="image/svg+xml"></object>
          <h4 class="card__title">ОБОРУДОВАНИЕ</h4>
          <p class="card__text">Используем в работе инструменты (перфоратор, штроборез, пылесос, высоко-оборотистая
            дрель и т.д.) </p>
        </div>
        <div class="card card__three">
          <object class="card__icon" data="./img/advantages/cart3.svg" type="image/svg+xml"></object>
          <h4 class="card__title">ГАРАНТИИ</h4>
          <p class="card__text"> Если вы обнаружите недоработку наших сотрудников, то устранение за наш счет! Однако за
            годы работы таких случаев было не много.</p>
        </div>
        <div class="card card__four">
          <object class="card__icon" data="./img/advantages/cart4.svg" type="image/svg+xml"></object>
          <h4 class="card__title">МАТЕРИАЛЫ</h4>
          <p class="card__text">При необходимости мы можем оказать содействие в выборе, покупке и доставке материалов ,
            сэкономив ваше время и деньги!</p>
        </div>
      </div>
      <button class="next-slider-btn next-slider-btn--bg-off"></button>
    </div>
  </section>

  <section class="city">
    <!--  style="background-image: url(./img/city/bg.jpg);"-->
    <video class="city__bg-video" src="./img/city/bg.mp4" type="video/mp4" autoplay loop muted></video>
    <div class="container">
      <div class="city__inner">
        <div class="city__rect">
          <h1 class="city__title">
            <span class="city__title-start">ТРЕБУЕТСЯ ВЫЗОВ</span> ЭЛЕКТРИКА НА ДОМ?
          </h1>
          <button class="city__btn"></button>
        </div>
        <button class="next-slider-btn"></button>
      </div>
    </div>
  </section>

  <section class="steps">
    <div class="container">
      <h2 class="title-two">ПОРЯДОК <span class="title-two__end">РАБОТ</span></h2>
      <p class="subtitle">Опытные электромонтажники с профильным образованием, профессиональный инструмент и
        качественные материалы – это гарантия качественно выполненного электромонтажа в короткие сроки.
      </p>
      <object class="steps__image" data="./img/steps/groupRhombus.svg" type="image/svg+xml" class="card__icon"></object>
      <button class="next-slider-btn next-slider-btn--bg-off"></button>
    </div>
  </section>

  <section class="quality">
    <div class="container">
      <h2 class="title-two">КТО ЕСЛИ <span class="title-two__end">НЕ МЫ?</span></h2>
      <div class="quality__inner">
        <div class="description">
          <h3 class="description__title">ЦЕНА/КАЧЕСТВО</h3>
          <p class="description__text">Наша компания производит все виды электромонтажных работ. Обратившись к нам вы
            получите профессиональный подход, на всех этапах выполнения работ. Мы работаем только с проверенными
            поставщиками материалов и электрооборудования. Все работы производятся согласно действующим нормативным
            документам и стандартам.</p>
        </div>
        <div class="quality__wrap-img ">
          <div class="quality__box-img quality__box-img--one ">
            <img class="quality__small-img" src="./img/quality/img1.png" alt="Соблюдение сроков">
            <span class="quality__img-text">Соблюдение</br>сроков</span>
          </div>
          <div class="quality__box-img quality__box-img--two ">
            <img class="quality__small-img" src="./img/quality/img2.png" alt="Гарантия">
            <span class="quality__img-text">Гарантия</span>
          </div>
          <div class="quality__box-img quality__box-img--three ">
            <img class="quality__small-img" src="./img/quality/img3.png" alt="Ответственность">
            <span class="quality__img-text">Ответственность</span>
          </div>
          <div class="quality__box-img quality__box-img--four ">
            <img class="quality__small-img" src="./img/quality/img4.png" alt="Конкурентно - способные цены">
            <span class="quality__img-text">Конкурентно - способные</br>цены</span>
          </div>
        </div>
      </div>

       <div class="slider">
        <div class="slider__items">

          <div class="slider__item slider__item--one" style="background-image: url(./img/slider/img1.jpg);">
            <div class="description description--right">
              <h3 class="description__title">ЭЛЕКТРОЩИТЫ</h3>
              <p class="description__text">
                Наша компания производит сборку, модернизацию, переборку электрощитов различного назначения и объема, в
                своей работе мы используем только лучшие комплектующие, от проверенных поставщиков и производителей.
                Также при необходимости мы предоставляем однолинейные схемы.</p>
            </div>
          </div>
          <div class="slider__item slider__item--two" style="background-image: url(./img/slider/img2.jpg);">
            <div class="description description--right">
              <h3 class="description__title">ЗАЗЕМЛЕНИЕ</h3>
              <p class="description__text">
                Заземление (защитное заземление для электропроводки, норматив по условиям ПУЭ - до 4 Ом) - это важнейший
                фактор при строительстве и эксплуатации любого объекта! Правильно сделанное заземление, уберегает
                человека от удара электрическим током, предотвращает пожар в щите при обрыве проводов от подстанции,
                защищает электронную аппаратуру, убирает не приятные ощущения статического напряжения.</p>
            </div>
          </div>
          <div class="slider__item slider__item--three" style="background-image: url(./img/slider/img3.jpg);">
            <div class="description">
              <h3 class="description__title">ЭЛЕКТРОМОНТАЖ</h3>
              <p class="description__text">
                Электромонтаж под ключ с гарантией.</br>
                Все оказываемые нами работы производятся при строгом соблюдении всех действующих стандартов
                электробезопасности. Наши сотрудники – это монтажники высокой квалификации 3-4 разряда, допущенных к
                работе до 1 000 Вт.</p>
              <p class="description__text">
                После проведения электромонтажных работ, в обязательном порядке мы проводим пусконаладочные работы и
                предоставляем заказчику фото и видео отчет о проделанной работе. Гарантия на все выполненные работы – до
                5 лет.</p>
            </div>
          </div>
          <div class="slider__item slider__item--four" style="background-image: url(./img/slider/img4.jpg);">
            <div class="description description--right">
              <h3 class="description__title">РЕТРО ПРОВОДКА</h3>
              <p class="description__text">
                Ретро проводка в интерьере сегодня вновь становится популярной, особенно если речь идет о дизайне под
                стили шале, лофт, винтаж и кантри. На даче, в домах из бруса и сруба — это довольно оригинальное и
                безопасное решение.</p>
            </div>
          </div>
          <div class="slider__item slider__item--five" style="background-image: url(./img/slider/img5.jpg);">
            <div class="description description--right">
              <h3 class="description__title">ВИДЕОНАБЛЮДЕНИЕ</h3>
              <p class="description__text">
                Системы видеонаблюдения обеспечивают непрерывное отслеживание обстановки на территории и в помещениях.
                Для защиты объектов от незаконного проникновения мы устанавливаем пультовую, автономную или GPS
                сигнализацию, комплексные системы безопасности на основе оборудования различных ценовых категорий.</p>
            </div>
          </div>
        </div>
        <!-- КНОПКИ "НАЗАД" И "ВПЕРЁД" -->
        <a class="slider__control slider__control_left" href="#" role="button"></a>
        <a class="slider__control slider__control_right slider__control_show" href="#" role="button"></a> 
      </div> 
      
      <button class="next-slider-btn next-slider-btn--bg-off"></button>
    </div>
  </section>

  <section class="inst">
    <div class="container">
      <div class="inst__inner">
        <h3 class="title-two">INSTAGRAM</h3>
        <?php require_once __DIR__.'/Views/instSliders.php';  ?>
      </div>
    </div>
  </section>

  <section class="our-team">
    <div class="container">
      <h3 class="title-two">НАША <span class="title-two__end">КОМАНДА</span></h3>
      
    </div>
  </section>


  <section class="y-map">
    <div class="container">
      <div class="y-map__inner">
        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8724fedd412e6d51eaadcbe84377804ef679aa852682ce253dd0e7884c91e5e5&amp;width=1170&amp;height=500&amp;lang=ru_RU&amp;scroll=true"></script>
      </div>
    </div>
  </section>
  
  <script src="./js/bundle.js" defer></script>
</body>

</html>
