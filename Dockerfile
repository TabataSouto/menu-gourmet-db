FROM node:16-alpine3.18

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli

USER node

WORKDIR /app