import Info from '../model/Info.js'

export default function infoSeed() {
  const infos = [...Array(20).keys()].map(v => ({
    content: Array(20).fill('content' + v).toString(),
    title: 'title' + v,
  }))

  Info.insertMany(infos, (err, docs) => {
    (err) ? console.log(err) : console.log('InfoSeed success', docs)
  })
}