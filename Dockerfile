FROM node:25.0.0-alpine3.22

RUN apk update

WORKDIR /app

COPY . /app

ENTRYPOINT ["node", "/app/server.js"]
