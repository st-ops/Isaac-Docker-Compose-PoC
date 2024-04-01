FROM node:21 AS builder

WORKDIR /app

COPY package.json .

RUN npm i

FROM node:21-alpine

COPY --from=builder /app .

WORKDIR /app

COPY . .

EXPOSE 3000 80

CMD [ "npm", "run", "start" ]