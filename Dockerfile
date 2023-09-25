FROM node:18.16.1-alpine
WORKDIR /vtes-app
RUN echo $(ls)
COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

COPY . .
CMD ["npm", "start"]
