FROM node:16-alpine3.18

# RUN rm -f /var/lib/postgresql/data/pg_hba.conf

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli

USER node

WORKDIR /app