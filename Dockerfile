FROM node:18.16.1-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
COPY package-lock.json .
RUN echo $(ls -1 /app)
RUN npm ci --silent
RUN npm install react-scripts@5.0.1 -g --silent
COPY . .
RUN echo $(ls -1 /app)
RUN npm run build
RUN echo $(ls -1 /app/build)

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
USER nginx
CMD ["nginx", "-g", "daemon off;"]
