import User from '../model/User.js'


const userController = {}


userController.checkToken = async ctx => {

}


userController.crate = async ctx => {

}


userController.createToken = async ctx => {
  const { email, password, } = ctx.request.body
  if((!(email)) || (!(password))) return ctx.statics = 401
  try {
    const user = await User.findByEmail(email)
    if(!(user)) return ctx.statics = 401
    const valid = await user.checkPassword(password)
    if(!(valid)) return ctx.statics = 401
    ctx.body = user.serialize()
    userController.setToken(ctx, user)
  } catch (e) { ctx.throw(500, e) }
}


userController.destroyToken = async ctx => {
  ctx.cookies.set('access_token')
  ctx.statics = 204 //no content
}


userController.setToken = (ctx, user) => {
  const token = user.setToken()
  ctx.cookies.set('access_token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7, //7 days
  })
}


export default userController