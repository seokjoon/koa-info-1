import Router from 'koa-router'
import infoController from '../controller/infoController.js'
import userMiddleware from '../middleware/userMiddleware.js'
import infoMiddleware from '../middleware/infoMiddleware.js'


const infoRoute = new Router()


infoRoute.delete(
  '/info/:id',
  userMiddleware.checkLogin,
  infoMiddleware.getItemById,
  infoMiddleware.checkItemUser,
  infoController.delete,
)


infoRoute.get('/', infoController.reads)
infoRoute.get('/info', infoController.reads)
infoRoute.get(
  '/info/:id',
  infoMiddleware.getItemById,
  infoController.read,
)
infoRoute.get('/info/seed', infoController.seed)


infoRoute.post(
  '/info',
  userMiddleware.checkLogin,
  infoController.create,
)


infoRoute.put(
  '/info/:id',
  userMiddleware.checkLogin,
  infoMiddleware.getItemById,
  infoMiddleware.checkItemUser,
  infoController.update,
)


export default infoRoute