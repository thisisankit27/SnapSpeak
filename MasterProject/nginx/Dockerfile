FROM nginx:1.25-alpine

RUN mkdir -p /etc/nginx/templates

COPY ./default.conf.template /etc/nginx/templates

CMD ["/bin/sh", "-c","envsubst '${DJANGO_EXPOSE_PORT} ${NGINX_EXPOSE_PORT}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]