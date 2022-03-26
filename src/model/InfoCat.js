import mongoose from 'mongoose'


const { Schema } = mongoose


export const InfoCatSchema = new Schema({
  dateCreate: {
    default: Date.now,
    type: Date,
  },
  title: {
    required: true,
    type: String,
  },
})


/**
 * @class InfoCat
 * @type {Model<InfoCatSchema>}
 * https://intellij-support.jetbrains.com/hc/en-us/community/posts/207115889-Mongoose-static-methods-autocompletion-in-WebStorm
 */
const InfoCat = mongoose.model('InfoCat', InfoCatSchema)


export default InfoCat