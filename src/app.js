import Koa from 'koa'


const app = new Koa()


app.use(ctx => {
  ctx.body = 'Hello World'
})


app.listen(5001, () => {
  console.log('Server is running on port 5001')
})


export default app