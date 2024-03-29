FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN apk add --update nodejs npm

RUN npm install

RUN npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
