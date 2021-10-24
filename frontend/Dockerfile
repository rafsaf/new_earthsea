FROM node:16
WORKDIR /opt/frontend
COPY package.json .
COPY package-lock.json .
RUN echo "REACT_APP_API_LINK=https://api.ziemiomorze.pl" > .env.production
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=0 opt/frontend/build /usr/share/nginx/html