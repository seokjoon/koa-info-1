##
* docker build --tag koa-info-1 .
* docker run -d --restart unless-stopped --name=koaInfo1 -v /d1/app/www/5001/seokjoon/koa-info-1:/koa-info-1 -p 5001:5001 koa-info-1
* docker logs koaInfo1
* docker exec -it koaInfo1 pm2 list





