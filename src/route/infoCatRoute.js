import Router from 'koa-router'
import infoCatController from '../controller/infoCatController.js'

const infoCatRoute = new Router()


infoCatRoute.get('/infoCat', infoCatController.reads)
infoCatRoute.get('/infoCatSeed', infoCatController.seed)


export default infoCatRoute