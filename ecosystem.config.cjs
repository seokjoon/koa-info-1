module.exports = [
  {
    env: {
      NODE_ENV: 'production',
      PATH_PRODUCTION: 'koa-info-1',
    },
    exec_mode: 'cluster',
    instances: 1,
    name: 'koa-info-1',
    script: '/koa-info-1/src/index.js',
  },
  // {
  //   script: 'worker.js',
  //   name: 'worker'
  // },
]
