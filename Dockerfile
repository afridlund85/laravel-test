FROM php:7.1-fpm

RUN apt-get update && apt-get install -y libmcrypt-dev \
  mysql-client \
  libmagickwand-dev \
  openssl \
  git \
  zip \
  --no-install-recommends \
  && pecl install imagick \
  && docker-php-ext-enable imagick \
  && docker-php-ext-install mcrypt \
    pdo_mysql \
  && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN sed -ri 's/^www-data:x:33:33:/www-data:x:1000:1000:/' /etc/passwd \
  && chown -R www-data:www-data /var/www/html

USER www-data

