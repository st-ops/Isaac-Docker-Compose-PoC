FROM node:latest AS build

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 5000 

CMD [ "npm", "run", "start" ]