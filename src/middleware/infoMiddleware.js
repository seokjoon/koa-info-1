import mongoose from 'mongoose'
import Info from '../model/Info.js'


const infoMiddleware = {}
const { ObjectId } = mongoose.Types


infoMiddleware.checkItemUser = (ctx, next) => {
  const { info, user } = ctx.state
  if(info.user._id.toString() !== user._id) return ctx.status = 403
  return next()
}


infoMiddleware.getItemById = async (ctx, next) => {
  const { id } = ctx.params
  if(!(ObjectId.isValid(id))) return ctx.status = 400
  try {
    const item = await Info.findById(id)
    if(!(item)) return ctx.status = 404
    ctx.state.info = item
    return next()
  } catch (e) { ctx.throw(500, e) }
}


export default infoMiddleware