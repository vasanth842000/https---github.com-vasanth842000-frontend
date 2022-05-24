FROM node:latest as builder

WORKDIR D:\Angular-project-main

COPY . .

RUN node_modules/.bin/ng build --prod && npm start

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist/angular-project-main .

ENTRYPOINT ["nginx","-g","daemon off;"]
