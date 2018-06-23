FROM nginx:stable-alpine
MAINTAINER Wisdman <wisdman@ajaw.it>

RUN rm -Rf /etc/nginx/* \
 && mkdir -p /www \
 && mkdir -p /www-cache \
 && apk add --no-cache --virtual openssl \
 && openssl dhparam -out /etc/nginx/dhparam.pem 2048 \
 && apk del .build-deps

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/server.conf /etc/nginx/server.conf

COPY ./dist /www

VOLUME /www
VOLUME /etc/nginx/ssl

EXPOSE 80 443
STOPSIGNAL SIGTERM

CMD ["nginx"]