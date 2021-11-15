FROM debian:jessie

ENV DEBIAN_FRONTEND noninteractive
ENV container docker

RUN apt update
RUN apt upgrade
RUN apt install -y wget

RUN apt -y --force-yes install ca-certificates apt-transport-https
RUN apt -y --force-yes install apache2

RUN apt update
RUN apt -y install php5 php5-mysql libapache2-mod-php5

RUN apt install unzip

RUN cd /var/www/html \
    && wget https://wordpress.org/latest.zip \
    && unzip -q latest.zip \
    && chown -R www-data:www-data /var/www/html/wordpress \
    && chmod -R 755 /var/www/html/wordpress \
    && mkdir -p /var/www/html/wordpress/wp-content/uploads \
    && chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads \
    && rm latest.zip

ENV WORDPRESS_DB 'wordpress'
ENV WORDPRESS_DB_USER 'admin'
ENV WORDPRESS_DB_PASS 'admin'
ENV WORDPRESS_DB_HOST 'localhost'

EXPOSE 80
VOLUME /var/www/html/wordpress

CMD sed -i "s/^.*DB_NAME.*$/define('DB_NAME', '${WORDPRESS_DB}');/" /var/www/html/wordpress/wp-config-sample.php \
    && sed -i "s/^.*DB_USER.*$/define('DB_USER', '${WORDPRESS_DB_USER}');/" /var/www/html/wordpress/wp-config-sample.php \
    && sed -i "s/^.*DB_PASSWORD.*$/define('DB_PASSWORD', '${WORDPRESS_DB_PASS}');/" /var/www/html/wordpress/wp-config-sample.php \
    && sed -i "s/^.*DB_HOST.*$/define('DB_HOST', '${WORDPRESS_DB_HOST}');/" /var/www/html/wordpress/wp-config-sample.php \
    && /usr/sbin/apachectl -D FOREGROUND