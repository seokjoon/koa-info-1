import InfoCat from '../model/InfoCat.js'


export default async function infoCatSeed() {
  InfoCat.deleteMany({}, (e) => {
    (e) ? console.log(e) : console.log('InfoCat deleted')
  })

  const infoCats = [...Array(3).keys()].map(v => ({
    title: 'title ' + v,
  }))
  await InfoCat.insertMany(infoCats, (e, docs) => {
    (e) ? console.log(e) : console.log('InfoCatSeed success', docs)
  })
}