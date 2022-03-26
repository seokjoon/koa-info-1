import InfoCat from '../model/InfoCat.js'
import infoCatSeed from '../seed/infoCatSeed.js'

const infoCatController = {}


infoCatController.reads = async ctx => {
  let { title } = ctx.query
  const query = {
    ...(title ? { 'title': title } : {}),
  }
  ctx.body = await InfoCat.find(query).sort({ '_id': -1 }).exec()
}


infoCatController.seed = ctx => {
  try {
    infoCatSeed()
    ctx.body = 'seed infoCat'
  } catch (e) {
    ctx.throw()
  }
}


export default infoCatController