import Router from 'koa-router'
import infoController from '../controller/infoController.js'


const infoRoute = new Router()


infoRoute.get('/', infoController.reads)
infoRoute.get('/infos', infoController.reads)


export default infoRoute