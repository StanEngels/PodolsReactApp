# Stage 1
FROM node:14 as react-build
WORKDIR /builddir
COPY . ./
RUN npm install
RUN npm install react-scripts@latest -g
RUN npm run build


# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /builddir/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
