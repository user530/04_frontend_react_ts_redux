FROM node:18 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm i --production=false

COPY . .

RUN npm run build

CMD [ "node", "server.js" ]