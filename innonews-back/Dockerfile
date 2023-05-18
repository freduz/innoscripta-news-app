FROM php:8.1.19-fpm-alpine3.18

RUN docker-php-ext-install pdo pdo_mysql sockets
RUN curl -sS https://getcomposer.org/installer​ | php -- \
     --install-dir=/usr/local/bin --filename=composer



WORKDIR /app/backend
COPY . .
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install


CMD php artisan serve --host 0.0.0.0 --port 8000

