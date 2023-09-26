FROM node:18.16.1-alpine as build
WORKDIR /vtes-app
ENV PATH /vtes-app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@5.0.1 -g --silent
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/vtes-app /usr/share/nginx/html
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
