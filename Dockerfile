FROM node:latest as builder

WORKDIR D:\Angular-project-main

COPY . .

RUN node_modules/.bin/ng build --prod 

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder D:\Angular-project-main .

ENTRYPOINT ["nginx","-g","daemon off;"]
