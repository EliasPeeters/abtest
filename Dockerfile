FROM node:18-alpine

WORKDIR /api

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

EXPOSE 4444

CMD [ "node", "index.js" ]
