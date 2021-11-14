FROM debian:jessie

ENV DEBIAN_FRONTEND noninteractive
ENV container docker

RUN apt-get update
RUN apt-get upgrade
RUN apt-get install -y wget
RUN wget http://repo.mysql.com/mysql-apt-config_0.8.13-1_all.deb
RUN apt-get install -y lsb-release
RUN dpkg -i mysql-apt-config_0.8.13-1_all.deb
RUN apt-get update
RUN apt-get install -y mysql-server

EXPOSE 3306

LABEL version="1.0"
LABEL description="MySQL Server"

CMD ["mysqld"]