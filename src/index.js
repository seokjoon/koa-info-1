import app from './app.js'
import Router from 'koa-router'
import infoRoute from './route/infoRoute.js'
import infoCatRoute from './route/infoCatRoute.js'
import userRoute from './route/userRoute.js'


const router = new Router()

router.use('/api', infoRoute.routes())
router.use('/api', infoCatRoute.routes())
router.use('/api', userRoute.routes())

app.use(router.routes()).use(router.allowedMethods())