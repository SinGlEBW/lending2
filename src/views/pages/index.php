<?require_once __DIR__.'/../component/head.php';?>
  <link rel="stylesheet" href="../../assets/css/style.min.css" >
  <script src="../../assets/js/checkDevice.min.js"></script>
  <script src="//code.jivosite.com/widget/ZNPZNVUfne" async></script>
  <meta property="og:title" content="Elektrik Staff">
  <meta property="og:url" content="https://elektrikstaff.ru">
  <meta property="og:image" content="https://elektrikstaff.ru/assets/img/logo.jpg">
  <meta property="og:description" content="Выполняем электро-монтажные работы в Краснодаре">
</head>
<body>
  <header class="header">
    <div class="header__items">
      <a class="header__phone" href="tel:+79024058000">+7(902)405-80-00</a>
      <div class="social">
        <a class="social__link" href="https://wa.me/message/YQUSCZUJDJJZJ1"> 
          <svg class="social__link-svg svg-whatsapp">
            <defs>
              <linearGradient id="svg-whatsapp__lg" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stop-color="#90e4a3"/>
                <stop offset="1" stop-color="#1ef32c"/>
              </linearGradient>
            </defs>
            <use class="svg-whatsapp__no-active" href="../../assets/img/sprite.svg#whatsapp" />
            <use class="svg-whatsapp__active" href="../../assets/img/sprite.svg#whatsapp" fill="url(#svg-whatsapp__lg)" />
          </svg>
          <span class="social__link-name social__link-name--whatsapp">WhatsApp</span>
        </a>
        <a class="social__link" href="https://www.instagram.com/elektrik_staff/">
          <svg class="social__link-svg svg-instagram" >
            <defs>
              <linearGradient id="svg-instagram__lg" x1="-57%" y1="6%" x2="56%" y2="-54%">
                <stop offset="0" stop-color="#fd5" />
                <stop offset=".5" stop-color="#ff543e" />
                <stop offset="1" stop-color="#c837ab" />
              </linearGradient>
            </defs>
            <use class="svg-instagram__no-active" href="../../assets/img/sprite.svg#instagram" />
            <use class="svg-instagram__active" href="../../assets/img/sprite.svg#instagram" fill="url(#svg-instagram__lg)" />
          </svg>
          <span class="social__link-name social__link-name--instagram">Instagram</span>
          
        </a>
      </div>
      <button class="price-btn" id="js-popup-pl-open" data-name="Прайс-лист"></button>
    </div>

    <div class="price-list popup" id="js-popup-pl">
      <div class="price-list__content popup__content">
        <h3 class="price-list__title popup__title">Прайс лист</h3>
        <i class="price-list__close popup__close" id="js-popup-pl-close"></i>
        <table class="price-list__table" id="js-p-table">
          <tbody class="price-list__table-body" id="js-p-tableBody"></tbody>
        </table>
        <div class="price-list__out">
          <span class="price-list__total">Итого:</span>
          <span class="price-list__result" id="js-p-result">0</span>
        </div>
      </div>
    </div>
   
  </header>

  <section class="main" style="background-image: url(../../assets/img/main/bg.jpg);">
     <div class="container">
      <div class="main__inner">
        <div class="main__top">
          <svg class="logo__svg">
            <use class="logo__svg-use" xlink:href="../../assets/img/sprite.svg#logo"/>
          </svg>
          <span class="main__city">г. Краснодар</span>
        </div>
        <div class="main__middle">
          <div class="main__title-box">
            <h1 class="main__title">МОНТАЖНЫЕ РАБОТЫ</h1>
          </div>
          <p class="main__slogan">Мы работаем для Вас И с максимальным вниманием относимся к каждому клиенту</p>
        </div>
      </div>
    </div>
  </section>

  <section class="advantages">
    <div class="container">
      <h2 class="title-two">ПОЧЕМУ <span class="title-two__end">МЫ?</span></h2>
      <p class="subtitle">Почему за проведение электромонтажных работ обращаются к нам?</p>
      <div class="cards" id="js-adv-cards">
        <div class="card card__one" data-aos="fade-up" data-aos-duration="500">
          <svg class="card__svg">
            <use class="card__svg-use" xlink:href="../../assets/img/sprite.svg#cart1"/>
          </svg>
          <h4 class="card__title">ДОСТУПНЫЕ ЦЕНЫ</h4>
          <p class="card__text">Стоимость электромонтажных работ ниже рыночной на 10-15% за счет прямого сотрудничества
            снами – без посредников и без накруток.</p>
        </div>
        <div class="card card__two">
          <svg class="card__svg">
            <use class="card__svg-use" xlink:href="../../assets/img/sprite.svg#cart2"/>
          </svg>          
          <h4 class="card__title">ОБОРУДОВАНИЕ</h4>
          <p class="card__text">Используем в работе инструменты (перфоратор, штроборез, пылесос, высоко-оборотистая
            дрель и т.д.) </p>
        </div>
        <div class="card card__three">
          <svg class="card__svg">
            <use class="card__svg-use" xlink:href="../../assets/img/sprite.svg#cart3"/>
          </svg>   
          <h4 class="card__title">ГАРАНТИИ</h4>
          <p class="card__text"> Если вы обнаружите недоработку наших сотрудников, то устранение за наш счет! Однако за
            годы работы таких случаев было не много.</p>
        </div>
        <div class="card card__four">
          <svg class="card__svg">
            <use class="card__svg-use" xlink:href="../../assets/img/sprite.svg#cart4"/>
          </svg>   
          <h4 class="card__title">МАТЕРИАЛЫ</h4>
          <p class="card__text">При необходимости мы можем оказать содействие в выборе, покупке и доставке материалов ,
            сэкономив ваше время и деньги!</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section-mail" id="js-check-device">
    <div class="container">
      <div class="section-mail__rect">
        <h1 class="section-mail__title">
          <span class="section-mail__title-start">ТРЕБУЕТСЯ ВЫЗОВ</span> ЭЛЕКТРИКА НА ДОМ?
        </h1>
        <button class="section-mail__btn" id="js-popup-mail-open">Написать нам</button>
        <div class="mail-popup popup" id="js-popup-mail">
          <div class="mail-popup__content popup__content" id="js-popup-mail-content">
            <h3 class="mail-popup__title">Отправить заявку на почту</h3>
            <i class="mail-popup__close popup__close" id="js-popup-mail-close"></i>
            <form class="mail-popup__form" id="js-m-form">
              <label class="mail-popup__form-label mail-popup__form-label--name">
                <span class="mail-popup__form-label-text">Имя</span>
                <input class="mail-popup__form-item mail-popup__form-name" id="js-m-name" name="name" type="text" required>
              </label>
              <label class="mail-popup__form-label mail-popup__form-label--phone">
                <span class="mail-popup__form-label-text">Телефон</span>
                <input class="mail-popup__form-item mail-popup__form-phone" id="js-m-phone" name="phone" data-mask="+7 (000) 000-00-00"  placeholder="+7 (___) ___ - __ - __" type="tel" required>
              </label>
              <label class=" mail-popup__form-label mail-popup__form-label--textarea">
                <span class="mail-popup__form-label-text">Сообщение</span>
                <textarea textarea class="mail-popup__form-item mail-popup__form-textarea" id="js-m-textarea" name="msg" required></textarea>
              </label>
              <input class="mail-popup__form-item mail-popup__form-send" type="submit" value="Отправить">
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="steps">
    <div class="container">
      <h2 class="title-two">ПОРЯДОК <span class="title-two__end">РАБОТ</span></h2>
      <p class="subtitle">Опытные электромонтажники с профильным образованием, профессиональный инструмент и
        качественные материалы – это гарантия качественно выполненного электромонтажа в короткие сроки.
      </p>
      <object class="steps__image" data="../../assets/img/steps/groupRhombus.svg" type="image/svg+xml" class="card__icon"></object>
    </div>
  </section>

  <section class="quality">
    <div class="container">
      <h2 class="title-two">КТО ЕСЛИ <span class="title-two__end">НЕ МЫ?</span></h2>
      <div class="quality__top-box">
        <div class="description">
          <h3 class="description__title">ЦЕНА/КАЧЕСТВО</h3>
          <p class="description__text">Наша компания производит все виды электромонтажных работ. Обратившись к нам вы
            получите профессиональный подход, на всех этапах выполнения работ. Мы работаем только с проверенными
            поставщиками материалов и электрооборудования. Все работы производятся согласно действующим нормативным
            документам и стандартам.</p>
        </div>
        <ul class="quality__items ">
          <li class="quality__item-img" data-text="Конкурентно - способные цены">
            <svg class="quality__svg">
              <use class="quality__svg-use" xlink:href="../../assets/img/sprite.svg#low_prices"  />
            </svg>
          </li>
          
          <li class="quality__item-img" data-text="Ответственность">
            <svg class="quality__svg">
              <use class="quality__svg-use" href="../../assets/img/sprite.svg#handshake"  />
            </svg>
          </li>

          <li class="quality__item-img" data-text="Соблюдение сроков">
            <svg class="quality__svg">
              <use class="quality__svg-use" xlink:href="../../assets/img/sprite.svg#deadlines" />
            </svg>
          </li>

          <li class="quality__item-img" data-text="Гарантия">
            <svg class="quality__svg">
              <use class="quality__svg-use" xlink:href="../../assets/img/sprite.svg#garantee" />
            </svg>
          </li>
        </ul>
      </div>

       <div class="slider">
        <ul class="slider__items">
          <li class="slider__item slider__item--one" style="background-image: url(../../assets/img/slider/img1.jpg);">
            <div class="description description--right">
              <h3 class="description__title">ЭЛЕКТРОЩИТЫ</h3>
              <p class="description__text">
                Наша компания производит сборку, модернизацию, переборку электрощитов различного назначения и объема, в
                своей работе мы используем только лучшие комплектующие, от проверенных поставщиков и производителей.
                Также при необходимости мы предоставляем однолинейные схемы.</p>
            </div>
          </li>
          <li class="slider__item slider__item--two" style="background-image: url(../../assets/img/slider/img2.jpg);">
            <div class="description description--right">
              <h3 class="description__title">ЗАЗЕМЛЕНИЕ</h3>
              <p class="description__text">
                Заземление (защитное заземление для электропроводки, норматив по условиям ПУЭ - до 4 Ом) - это важнейший
                фактор при строительстве и эксплуатации любого объекта! Правильно сделанное заземление, уберегает
                человека от удара электрическим током, предотвращает пожар в щите при обрыве проводов от подстанции,
                защищает электронную аппаратуру, убирает не приятные ощущения статического напряжения.</p>
            </div>
          </li>
          <li class="slider__item slider__item--three" style="background-image: url(../../assets/img/slider/img3.jpg);">
            <div class="description">
              <h3 class="description__title">ЭЛЕКТРОМОНТАЖ</h3>
              <p class="description__text">
                Электромонтаж под ключ с гарантией.
                Все оказываемые нами работы производятся при строгом соблюдении всех действующих стандартов
                электробезопасности. Наши сотрудники – это монтажники высокой квалификации 3-4 разряда, допущенных к
                работе до 1 000 Вт.</p>
              <p class="description__text">
                После проведения электромонтажных работ, в обязательном порядке мы проводим пусконаладочные работы и
                предоставляем заказчику фото и видео отчет о проделанной работе. Гарантия на все выполненные работы – до
                5 лет.</p>
            </div>
          </li>
          <li class="slider__item slider__item--four" style="background-image: url(../../assets/img/slider/img4.jpg);">
            <div class="description description--right">
              <h3 class="description__title">РЕТРО ПРОВОДКА</h3>
              <p class="description__text">
                Ретро проводка в интерьере сегодня вновь становится популярной, особенно если речь идет о дизайне под
                стили шале, лофт, винтаж и кантри. На даче, в домах из бруса и сруба — это довольно оригинальное и
                безопасное решение.</p>
            </div>
          </li>
          <li class="slider__item slider__item--five" style="background-image: url(../../assets/img/slider/img5.jpg);">
            <div class="description description--right">
              <h3 class="description__title">ВИДЕОНАБЛЮДЕНИЕ</h3>
              <p class="description__text">
                Системы видеонаблюдения обеспечивают непрерывное отслеживание обстановки на территории и в помещениях.
                Для защиты объектов от незаконного проникновения мы устанавливаем пультовую, автономную или GPS
                сигнализацию, комплексные системы безопасности на основе оборудования различных ценовых категорий.</p>
            </div>
          </li>
        </ul>
      
        <a class="slider__control slider__control_left" href="#" role="button"></a>
        <a class="slider__control slider__control_right slider__control_show" href="#" role="button"></a> 
      </div> 
      
    </div>
  </section> 

  <section class="inst">
    <div class="container">
      <h3 class="title-two">INSTAGRAM</h3>
      <?php require_once __DIR__.'/../component/instSliders.php';  ?>
    </div>
  </section>

  <section class="y-map">
    <div class="container">
      <h3 class="title-two">НАШ <span class="title-two__end">АДРЕС</span></h3>
      <div class="y-map__item">
        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8724fedd412e6d51eaadcbe84377804ef679aa852682ce253dd0e7884c91e5e5&amp;lang=ru_RU&amp;scroll=true"></script>
      </div>
    </div>
  </section>
 

  
  <script src="../../assets/js/bundle.min.js" defer></script>

<?php require_once __DIR__.'/../component/footer.php'?>
