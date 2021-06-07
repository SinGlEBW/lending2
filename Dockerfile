FROM php:8.0.2-apache
RUN a2enmod rewrite \
      && pecl install xdebug && docker-php-ext-enable xdebug \
      && docker-php-ext-install pdo_mysql
