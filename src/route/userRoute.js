import Router from 'koa-router'
import userController from '../controller/userController.js'


const userRoute = new Router()


userRoute.get('/userCheckToken', userController.checkToken)


userRoute.post('/user', userController.create)
userRoute.post('/userCreateToken', userController.createToken)
userRoute.post('/userDeleteToken', userController.deleteToken)


export default userRoute