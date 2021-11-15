# Lab 3

## Teil 1 - Docker Compose

Um die Infrastruktur zum Laufen zu bringen, muss im Terminal "docker-compose up" eingegeben werden.
Danach wird alles korrekt ausgeführt.
Damit man Wordpress benutzen kann, kann man danach im Browser den gemappten Port (hier 8000) ansteuern und Wordpress einrichten.

## Teil 2 - Dockerfiles

### Mysql Image

Um das MYSQL Image zu builden, muss `docker build .` aufgrufen werden. Im konkreten Fall wurde noch ein tag hinzugefügt, damit sieht der Command folgendermaßen aus: `docker build -t mysql_fh:v3 .`.

Um einen Container zu starten, muss `docker run mysql_fh:v3` aufgerufen werden. Man kann hier über die Environment Variablen (`-e`) den Namen der Standard DB (MYSQL_DB, default: 'db') und die Daten des Standard Users (MYSQL_USER, default: 'user') (MYSQL_PASS, default: 'pass') festlegen. Das Root Passwort ist standardmäßig auf 'mysql_root' gesetzt. Außerdem kann man über `-p 4401:3306` den MYSQL Port 3306 auf einen beliebigen System-Port mappen (hier 4401).

### Wordpress Image

Um das Wordpress Image zu builden, muss `docker build .` aufgrufen werden. Im konkreten Fall wurde noch ein tag hinzugefügt, damit sieht der Command folgendermaßen aus: `docker build -t wordpress_fh:v1 .`.

Um einen Container zu starten, muss `docker run wordpress_fh:v1` aufgerufen werden. Man kann hier über die Environment Variablen (`-e`) den Namen der Wordpress DB (WORDPRESS_DB, default: 'wordpress') und die Daten des Wordpress DB Users (WORDPRESS_DB_USER, default: 'admin') (WORDPRESS_DB_PASS, default: 'admin') festlegen. Außerdem kann man den Host konfigurieren (WORDPRESS_DB_HOST), dieser ist standardmäßig der localhost.

Es ist dringend notwendig, die Datenbank-Infos korrekt zu setzen, ansonst kann Wordpress nicht korrekt arbeiten.

Abschließend kann man über `-p 8080:80` den HTTP Port 80 auf einen beliebigen System-Port mappen (hier 8080).

### Docker Compose

Wenn die Images nach Anleitung erstellt wurden, kann nun das docker compose file verwendet werden. Dieses funktioniert fast genau gleich wie bei Teil 1. Der Befehl `docker-compose up` startet das Projekt. Auf Port 8080 ist der Webserver erreichbar. Unter dem Directory "/wordpress/" kann dann die Wordpress-Seite aufgerufen und konfiguriert werden.

Die DB-Config wird direkt aus dem Compose übernommen. Dazu ist es wichtig, dass der MYSQL Server bereits läuft, deshalb wird auch hier `depends_on` verwendet.
