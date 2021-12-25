import mongoose from 'mongoose'
import Info from '../model/Info.js'


const infoMiddleware = {}
const { ObjectId } = mongoose.Types


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