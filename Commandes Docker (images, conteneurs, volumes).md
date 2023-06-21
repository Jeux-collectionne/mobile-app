## GENERALITES :
### Afficher des informations sur l'installation de Docker
docker --version
docker version
docker info

### Afficher de l'aide
docker help
docker <sous-commande> --help

### Exécuter une image / un conteneur 
docker run [nom]

### Créer un volume
docker volume create

### Lister les éléments 
docker [ image | container | volume ] ls

### Supprimer un élément
docker rmi [nom]   *Image* 
docker rm [nom]   *Conteneur*
docker volume rm [nom]   *Volume*
#### ou forcer la suppression 
docker rm -f [nom]


## IMAGES DOCKER :
### Executer une image Docker
docker run hello-world

### Lister des images Docker
docker image ls
#### ou
docker images

### Supprimer une image Docker
docker images rmi <IMAGE_ID ou IMAGE_NAME>  # si c'est le nom de l'image qui est spécifié alors il prendra par défaut le tag latest
    -f ou --force : forcer la suppression

### Supprimer tous les images Docker
docker rmi -f $(docker images -q)

### Rechercher une image depuis le Docker hub Registry
docker search ubuntu
    --filter "is-official=true" : Afficher que les images officielles

### Télécharger une image depuis le Docker hub Registry
docker pull <IMAGE_NAME>  # prendra par défaut le tag latest
docker pull ubuntu:16.04 # prendra le tag 16.04


## CONTENEURS DOCKER :
### Exécuter une conteneur Docker
docker run <CONTAINER_NAME ou CONTAINER_ID>
#### ou : 
docker run --name [renommage_image] -tid <CONTAINER_NAME ou CONTAINER_ID>
    -t ou --tty : Allouer un pseudo TTY (terminal virtuel)
    --interactive ou -i : Garder un STDIN ouvert (l'entrée standard plus précisément l'entrée clavier)
    --detach ou -d : Exécuter le conteneur en arrière-plan et afficher l'ID du conteneur
    --name : Attribuer un nom au conteneur
    --expose: Exposer un port ou une plage de ports
    -p ou --publish : Mapper un port  "<PORT_CIBLE:PORT_SOURCE>"
    --rm : Supprimer automatiquement le conteneur quand on le quitte

### Lister des conteneurs en état running
docker container ls
#### ou
docker ps
    -a ou --all : Afficher tous les conteneurs peut importe leur état

### Supprimer un conteneur Docker
docker rm <CONTAINER_ID ou CONTAINER_NAME>
    -f ou --force : forcer la suppression

### Supprimer tous les conteneurs Docker
docker rm -f $(docker ps -aq)

### Exécuter une commande dans un conteneur Docker
docker exec <CONTAINER_ID ou CONTAINER_NAME> <COMMAND_NAME>
    -t ou --tty : Allouer un pseudo TTY
    -i ou --interactive : Garder un STDIN ouvert
    -d ou --detach : lancer la commande en arrière plan

### sorties/erreurs d'un conteneur
docker logs <CONTAINER_ID ou CONTAINER_NAME>
    -f : suivre en permanence les logs du conteneur
    -t : afficher la date et l'heure de la réception de la ligne de log
    --tail <NOMBRE DE LIGNE> = nombre de lignes à afficher à partir de la fin (par défaut "all")

### Transformer un conteneur en image (pour sauvegarder les modifications effectuées dans le conteneur (différent de la sauvegrade sous volume, et déconseillé)) 
docker commit <CONTAINER_NAME ou CONTAINER_ID> <NEW IMAGENAME>
    -a ou --author <string> : Nom de l'auteur (ex "John Hannibal Smith <hannibal@a-team.com>")
    -m ou --message <string> : Message du commit


## VOLUMES DOCKER :
### Créer un volume
docker volume create <VOLUME NAME>

### Lister les volumes
docker volume ls

### Supprimer un ou plusieurs volume(s)
docker volume rm <VOLUME NAME>
    -f ou --force : forcer la suppression

### Récolter des informations sur une volume
docker volume inspect <VOLUME NAME>

### Supprimer tous les volumes locaux inutilisés
docker volume prune
    -f ou --force : forcer la suppression

### Supprimer un conteneur Docker avec le/les volumes associés
docker rm -v <CONTAINER_ID ou CONTAINER_NAME>
    -f ou --force : forcer la suppression
    -v ou --volume : supprime les volumes associés au conteneur