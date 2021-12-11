import app from './app.js'
import Router from 'koa-router'


const router = new Router()


app.use(router.routes()).use(router.allowedMethods())