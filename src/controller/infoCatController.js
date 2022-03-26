import InfoCat from '../model/InfoCat.js'
import infoCatSeed from '../seed/infoCatSeed'

const infoCatController = {}


infoCatController.reads = async ctx => {
  let { title } = ctx.query
  const query = {
    ...(title ? { 'title': title } : {}),
  }
  const items = await InfoCat.find(query).sort({ '_id': -1 }).exec()
  ctx.body = {
    code: 200,
    data: items,
  }
}


infoCatController.seed = ctx => {
  try {
    infoCatSeed()
    ctx.body = 'seed infoCat'
  } catch (e) {
    ctx.throw()
  }
}