FROM node:latest AS builder

WORKDIR /app

COPY package.json .

RUN npm i

FROM node:21-alpine

COPY --from=builder /app .

WORKDIR /app

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "start" ]