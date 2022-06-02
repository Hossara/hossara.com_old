FROM node:16

RUN mkdir -p /usr/src/hossara.com
WORKDIR /usr/src/hossara.com

COPY . /usr/src/hossara.com
RUN yarn install
RUN yarn build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000

CMD ["node",".output/server/index.mjs"]