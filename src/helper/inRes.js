import sanitizedHtml from 'sanitize-html'


const inRes = {}


inRes.dump = (ctx) => {
  ctx.body = {
    body: ctx.request.body,
    method: ctx.method,
    params: ctx.params,
    path: ctx.path,
  }
}

inRes.htmlSanitizeSlice = (content, opts = { allowedTags: [] }) => {
  const outs = sanitizedHtml(content, opts)
  return ((outs.length < 200) ? (outs) : (outs.slice(0, 200) + '...'))
}

inRes.htmlSanitizeSliceOpts = {
  allowedAttributes: [],
  allowedSchemes: [],
  allowedTags: [],
}


export default inRes