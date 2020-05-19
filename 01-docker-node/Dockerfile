FROM node:alpine

WORKDIR /usr/app

COPY ./packges.json ./
RUN npm install 

COPY ./ ./

CMD ["npm", "start"]