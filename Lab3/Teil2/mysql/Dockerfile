FROM debian:jessie

ENV DEBIAN_FRONTEND noninteractive
ENV container docker

RUN apt update
RUN apt upgrade
RUN apt install -y wget
RUN wget http://repo.mysql.com/mysql-apt-config_0.8.9-1_all.deb
RUN apt install -y lsb-release
RUN dpkg -i mysql-apt-config_0.8.9-1_all.deb
RUN apt update
RUN apt install -y --force-yes mysql-server

# Allow remote connections
RUN sed -i "s/.*bind-address.*/bind-address = 0.0.0.0/" /etc/mysql/mysql.conf.d/mysqld.cnf

# Secure installation
RUN service mysql restart \
    && echo "UPDATE mysql.user SET authentication_string = PASSWORD('" + CHANGEME + "') WHERE User = 'root';" | mysql -uroot \
    && echo "DROP USER IF EXISTS ''@'localhost';" | mysql -uroot \
    && echo "DROP USER IF EXISTS ''@'$(hostname)';" | mysql -uroot \
    && echo "DROP DATABASE IF EXISTS test;" | mysql -uroot \
    && echo "FLUSH PRIVILEGES;" | mysql -uroot \
    && service mysql restart



VOLUME ["/var/lib/mysql/", "/etc/mysql"]

EXPOSE 3306

LABEL version="1.0"
LABEL description="MySQL Server"

ENV MYSQL_DB 'db'
ENV MYSQL_USER 'user'
ENV MYSQL_PASS 'pass'

CMD service mysql start \
    && echo "CREATE USER IF NOT EXISTS '$MYSQL_USER'@'%' IDENTIFIED BY '$MYSQL_PASS';" | mysql -uroot \
    && echo "CREATE DATABASE IF NOT EXISTS $MYSQL_DB;" | mysql -uroot \
    && mysqld --user=mysql