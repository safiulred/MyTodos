FROM node:12

RUN apt update
RUN mkdir -p /app

LABEL maintainer="Achmad Safiul Ubab <safiulred@gmail.com>"

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . .


CMD [ "node", "index.js" ]
