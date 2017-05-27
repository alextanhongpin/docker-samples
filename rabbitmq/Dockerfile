FROM node:7.3.0


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY app/package.json /usr/src/app/

RUN npm install

COPY app/ /usr/src/app

CMD npm start