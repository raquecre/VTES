FROM node:18.16.1-alpine
WORKDIR /vtes-app
COPY package.json .
COPY package-lock.json .
COPY . .
RUN echo $(pwd)
RUN echo $(ls)
RUN npm install
RUN npm install react-scripts@5.0.1 -g --silent
CMD ["npm", "start"]
FROM bitnami/nginx:1.24.0

COPY --from=node /usr/src/app/build /var/www/my-app
COPY ./nginx.conf /opt/bitnami/nginx/conf/nginx.conf
