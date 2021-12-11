import Info from '../model/Info.js'

const reqs = ctx => {
  ctx.body = {
    body: ctx.request.body,
    method: ctx.method,
    params: ctx.params,
    path: ctx.path,
  }
}


const infoController = {}


infoController.read = async ctx => {
  ctx.body = ctx.state.info
}


infoController.reads = async ctx => {
  const query = {}
  const items = await Info
    .find(query)
    .sort({ _id: -1 }) //sort: desc -1, asc 1
    .exec()
  ctx.body = items
    .map(item => item)
}


export default infoController