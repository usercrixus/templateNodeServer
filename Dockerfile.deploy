# syntax=docker/dockerfile:1

FROM node:16
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY ["./build",  "./build"]
CMD [ "node", "build/index.js" ]