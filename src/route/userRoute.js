import Router from 'koa-router'
import userController from '../controller/userController.js'


const userRoute = new Router()


userRoute.get('/user/checkToken', userController.checkToken)


userRoute.post('/user', userController.create)
userRoute.post('/user/createToken', userController.createToken)
userRoute.post('/user/deleteToken', userController.deleteToken)


export default userRoute