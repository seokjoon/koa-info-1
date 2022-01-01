const inReq = {}


inReq.dump = ctx => {
  ctx.body = {
    body: ctx.request.body,
    method: ctx.method,
    params: ctx.params,
    path: ctx.path,
  }
}


export default inReq