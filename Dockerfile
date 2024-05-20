FROM node:20
WORKDIR /rumi-reactjs
COPY package*.json .
RUN npm install --production
COPY . .
RUN npm run build