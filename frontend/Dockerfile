FROM node:16 as builder
WORKDIR /opt/frontend
COPY package.json .
COPY package-lock.json .
RUN echo "REACT_APP_API_LINK=https://api.ziemiomorze.pl" > .env.production
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=builder opt/frontend/build /usr/share/nginx/html