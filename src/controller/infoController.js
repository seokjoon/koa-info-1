import Info from '../model/Info.js'
import inRes from '../helper/inRes.js'
import inReq from '../helper/inReq.js'


const infoController = {}


infoController.create = async ctx => {
  const { content, tags, title, } = ctx.request.body
  const info = new Info({
    content: inRes.htmlSanitizeSlice(content, inRes.htmlSanitizeSliceOpts),
    tags,
    title,
    user: ctx.state.user,
  })
  try {
    await info.save()
    ctx.body = info
  } catch (e) { ctx.throw(500, e) }
}


infoController.destroy = async ctx => {
  const { id } = ctx.params
  try {
    await Info.findByIdAndRemove(id).exec()
    ctx.status = 204 //no content
  } catch (e) { ctx.throw(500, e) }
}


infoController.getReqDump = ctx => inReq.dump(ctx)


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