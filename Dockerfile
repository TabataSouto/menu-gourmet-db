FROM node:14-alpine

WORKDIR /app

COPY . .

# COPY /.env /.env

# essas flags não dão mensagens de erro ou warning a menos que seja um erro muito crítico 
# RUN npm install --quiet --no-optional --no-fund --loglevel=error
RUN npm install

RUN npm run build

EXPOSE 3001

CMD [ "npm", "run", "start:dev"]