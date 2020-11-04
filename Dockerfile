FROM node:15-alpine as build

WORKDIR /app
COPY . /app/

RUN npm install
RUN npm install react-scripts@latest -g
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /builddir/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
