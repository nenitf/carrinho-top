FROM node:16-alpine

ENV NODE_ENV development

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .
