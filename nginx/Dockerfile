FROM nginx:1.21.6
COPY ./ssl/cert.pem /etc/ssl/cert.pem
COPY ./ssl/key.pem /etc/ssl/key.pem
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf