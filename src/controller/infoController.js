import Info from '../model/Info.js'
import inRes from '../helper/inRes.js'
import inConst from '../helper/inConst.js'
import infoSeed from '../seed/infoSeed.js'


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


infoController.delete = async ctx => {
  const { id } = ctx.params
  try {
    await Info.findByIdAndRemove(id).exec()
    ctx.status = 204 //no content
  } catch (e) { ctx.throw(500, e) }
}


infoController.dump = ctx => inRes.dump(ctx)


infoController.read = async ctx => {
  ctx.body = ctx.state.info
}


infoController.reads = async ctx => {
  let { limit, page, tag, title, username, } = ctx.query
  const query = {
    ...(tag ? { tags: tag } : {}),
    ...(title ? { 'title': title } : {}),
    ...(username ? { 'user.username': username } : {}),
  }
  page = parseInt(page || 1)
  limit = parseInt(limit || inConst.ITEMS.PAGINATION.LIMIT)
  const items = await Info
    .find(query)
    .limit(limit)
    .skip((page - 1) * limit)
    .sort({ _id: -1 }) //sort: desc -1, asc 1
    .exec()
  const count = await Info.countDocuments(query).exec()
  ctx.set('Last-Page', Math.ceil(count / limit))
  ctx.body = items
    .map(item => item.toJSON())
    .map(item => ({
      ...item,
      content: inRes.htmlSanitizeSlice(item.content)
    }))
}


infoController.seed = ctx => {
  try {
    infoSeed()
    ctx.body = 'seed info'
  } catch (e) { ctx.throw(500, e) }
}


infoController.update = async ctx => {
  const { id  } = ctx.params
  try {
    const dataNext = { ...ctx.request.body }
    if(dataNext.content) dataNext.content = inRes.htmlSanitizeSlice(dataNext.content)
    const item = await Info.findByIdAndUpdate(id, dataNext, {
      new: true //true is next val, false(default) is prev val
    }).exec()
    if(!(item)) return ctx.status = 404
    ctx.body = item
  } catch (e) { ctx.throw(500, e) }
}


export default infoController