# Utilise une image de base contenant Node.js
FROM node:latest

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers du projet React Native dans le conteneur
ADD . /app

# Nettoie le cache npm avant l'installation "RUN npm install"
RUN npm cache clean --force

# Installe les dépendances
#RUN npm install
RUN npm install -g --force yarn
RUN yarn install

# Installe l'environnement de développement React Native
RUN npm install -g react-native-cli

# Installe l'émulateur Android
RUN apt-get update && apt-get install -y --no-install-recommends \
    qemu-kvm \
    libvirt-clients \
    libvirt-daemon-system \
    bridge-utils \
    virtinst \
    cpu-checker \
    mesa-utils \
    mesa-utils-extra \
    qemu-system-x86 \
    qemu-system-arm \
    qemu-utils \
    libvirt-daemon-system \
    libglu1-mesa-dev \
    libpulse0 \
    libvirt-clients \
    libvirt-daemon-system \
    libvirt-dev \
    libgles2-mesa-dev \
    libosmesa6-dev \
    libgles1 \
    libegl1-mesa-dev \
    #libvulkan1 \
    #mesa-vulkan-drivers \
    #vulkan-utils \
    #vulkan-validationlayers-dev \
    mesa-utils \
    curl \
    unzip \
    && curl -o /tmp/android-sdk.zip https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip \
    && unzip /tmp/android-sdk.zip -d /opt/android-sdk \
    && rm /tmp/android-sdk.zip

ENV ANDROID_HOME /opt/android-sdk
ENV PATH ${PATH}:${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools

# Expose le port du packager React Native (par défaut : 8081)
EXPOSE 8081

# Expose le port du serveur API
EXPOSE 80

# Démarre l'application React Native
CMD react-native start
