import app from './app.js'
import Router from 'koa-router'
import infoRoute from './route/infoRoute.js'


const router = new Router()


router.use('/api', infoRoute.routes())
app.use(router.routes()).use(router.allowedMethods())