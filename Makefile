DOCKER_USERNAME ?= [username]   # remplacer [username] par le nom de l'utilisateur => en faire une variable dynamique
APPLICATION_NAME ?= [hello-world]   # remplacer [hello-world] par le nom de l'application

build:
	docker build --tag ${DOCKER_USERNAME}/${APPLICATION_NAME} .

push:
	docker push ${DOCKER_USERNAME}/${APPLICATION_NAME}

# Sources :
# https://earthly.dev/blog/docker-and-makefiles/ et https://github.com/KSiig/docker-make/tree/main 