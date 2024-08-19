FROM node:14

RUN apt-get update && apt-get install -y wget \
    && wget -O /usr/local/bin/dockerize https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
    && chmod +x /usr/local/bin/dockerize

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "start"]
