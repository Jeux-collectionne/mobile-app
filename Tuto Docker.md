## 1. Construire son Dockerfile
* Créer un fichier "Dockerfile"
* Structure du Dockerfile :
    - FROM            *Définit l'image de base qui sera utilisée par les instructions suivantes*
    - LABEL           *Ajoute des métadonnées à l'image (pour indiquer par exemple l'auteur et le contenu du Dockerfile)*
    - WORKDIR         *Définit le répertoire de travail qui sera utilisé pour le lancement des commandes CMD et/ou ENTRYPOINT. Il devient le dossier courant lors du démarrage du conteneur*
    - COPY            *Permet de copier des fichiers depuis notre machine locale vers le conteneur Docker*
    - ADD             *Même chose que COPY mais prend en charge des liens ou des archives (si le format est reconnu, alors il sera décompressé à la volée)*
    - ARG             *Variables temporaires utilisables dans le Dockerfile et le conteneur*
    - ENV             *Variables d'environnements utilisables dans le Dockerfile et le conteneur*
    - RUN             *Exécute des commandes Linux ou Windows lors de la création de l'image.* 
                      *Plusieurs commandes RUN peuvent se succéder.* 
                      *Chaque instruction RUN va créer une couche en cache qui sera réutilisée dans le cas de modification ultérieure du Dockerfile*
    - ENTRYPOINT      *Point d'entrée du conteneur : commande qui sera toujours exécutée au démarrage du conteneur. Il prend la forme de tableau JSON (ex : CMD ["cmd1","cmd1"]) ou de texte*
    - CMD             *Spécifie les arguments qui seront envoyés au ENTRYPOINT.*
                      *Peut aussi être utilisé pour lancer des commandes par défaut lors du démarrage d'un conteneur.* 
                      *S'il est utilisé pour fournir des arguments par défaut pour l'instruction ENTRYPOINT, alors les instructions CMD et ENTRYPOINT doivent être spécifiées au format de tableau JSON*
    - EXPOSE          *Expose un port*
    - VOLUMES         *Crée un point de montage qui permet de persister les données*
    - USER            *Désigne quel est l'utilisateur qui lancera les prochaines instructions RUN, CMD ou ENTRYPOINT (par défaut, l'utilisateur root)*
        Exemple 1 :   
            FROM node:18-alpine   *Télécharge la version 18 de NodeJs (alpine = version light)*
            WORKDIR /app   *Indique le répertoire de travail*
            COPY . .   **
            RUN yarn install --production   *Utilise yarn pour installer les dépendances nécessaires*
            CMD ["node", "src/index.js"]   *Définit les commandes à utiliser par défaut au démarrage du conteneur*
            EXPOSE 3000   *Définit le port qui sera utilisé par l'application*
        
        Exemple 2 :
            # --------------- DÉBUT COUCHE OS -------------------
            FROM debian:stable-slim
            # --------------- FIN COUCHE OS ---------------------

            # MÉTADONNÉES DE L'IMAGE
            LABEL version="1.0" maintainer="AJDAINI Hatim <ajdaini.hatim@gmail.com>"

            # VARIABLES TEMPORAIRES
            ARG APT_FLAGS="-q -y"
            ARG DOCUMENTROOT="/var/www/html"

            # --------------- DÉBUT COUCHE APACHE ---------------
            RUN apt-get update -y && \
                apt-get install ${APT_FLAGS} apache2
            # --------------- FIN COUCHE APACHE -----------------

            # --------------- DÉBUT COUCHE MYSQL ----------------
            RUN apt-get install ${APT_FLAGS} mariadb-server
            COPY db/articles.sql /
            # --------------- FIN COUCHE MYSQL ------------------

            # --------------- DÉBUT COUCHE PHP ------------------
            RUN apt-get install ${APT_FLAGS} \
                php-mysql \
                php && \
                rm -f ${DOCUMENTROOT}/index.html && \
                apt-get autoclean -y

            COPY app ${DOCUMENTROOT}
            # --------------- FIN COUCHE PHP --------------------

            # OUVERTURE DU PORT HTTP
            EXPOSE 80

            # RÉPERTOIRE DE TRAVAIL
            WORKDIR  ${DOCUMENTROOT}

            # DÉMARRAGE DES SERVICES LORS DE L'EXÉCUTION DE L'IMAGE
            ENTRYPOINT service mariadb start && mariadb < /articles.sql && apache2ctl -D FOREGROUND

## 2. Construire le docker-compose
* Créer un fichier "docker-compose.yml"

## 3. Construire l'image depuis le Dockerfile 
* docker build -t [nom_conteneur] .
    - t : appose un flag sur l'image
    . : indique à Docker de chercher le fichier "Dockerfile" du répertoire

## 4. Lancer l'application depuis le docker-compose
* docker-compose up -d
    - d : exécute les conteneurs listés dans le docker-compose en arrière-plan
* Aller vérifier sur le navigateur à l'adresse "http://0.0.0.0:19002" que l'appli React Native est bien fonctionnelle
* Une fois dans l'appli, aller dans la section "Connexion" et cliquer sur "Tunnel" pour lancer l'appli sur Android depuis Expo Go app

docker build -t jeux_collectionne_mobile_app .