import Info from '../model/Info.js'

export default async function infoSeed() {
  Info.deleteMany({}, (e) => {
    (e) ? console.log(e) : console.log('InfoSeed deleted')
  })

  const infos = [...Array(20).keys()].map(v => ({
    content: Array(20).fill('content ' + v).toString(),
    title: 'title ' + v,
  }))
  await Info.insertMany(infos, (e, docs) => {
    (e) ? console.log(e) : console.log('InfoSeed success', docs)
  })
}