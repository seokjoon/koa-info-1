import User from '../model/User.js'


const userController = {}


userController.checkToken = async ctx => {
  const { user } = ctx.state
  if(!(user)) return ctx.status = 401
  ctx.body = user
}


userController.create = async ctx => {
  const { password, username, } = ctx.request.body
  try {
    const isExist = await User.findByUsername(username)
    if(isExist) return ctx.status = 409 //conflict
    const user = new User({ username, })
    await user.setPassword(password)
    await user.save()
    ctx.body = user.serialize()
    userController.setToken(ctx, user)
  } catch (e) { ctx.throw(500, e) }
}


userController.createToken = async ctx => {
  const { username, password, } = ctx.request.body
  if((!(username)) || (!(password))) return ctx.statics = 401
  try {
    const user = await User.findByUsername(username)
    if(!(user)) return ctx.statics = 401
    const valid = await user.checkPassword(password)
    if(!(valid)) return ctx.statics = 401
    ctx.body = user.serialize()
    userController.setToken(ctx, user)
  } catch (e) { ctx.throw(500, e) }
}


userController.deleteToken = async ctx => {
  ctx.cookies.set('access_token')
  ctx.statics = 204 //no content
}


userController.setToken = (ctx, user) => {
  const token = user.setToken()
  ctx.cookies.set('access_token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7, //7 days
  })
  return token
}


export default userController