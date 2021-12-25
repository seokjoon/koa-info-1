FROM node:latest
MAINTAINER Seok Joon Lee <seokjoon@gmail.com>

RUN npm install -g pm2

# CMD ["pm2-runtime", "/koa-info-1/src"]
CMD ["pm2-runtime", "/koa-info-1/ecosystem.config.cjs"]

EXPOSE 5001
