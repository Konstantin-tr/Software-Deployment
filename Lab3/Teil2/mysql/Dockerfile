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

VOLUME /var/lib/mysql/

EXPOSE 3306

LABEL version="1.0"
LABEL description="MySQL Server"

CMD mysqld --user=mysql