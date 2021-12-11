import mongoose from 'mongoose'


const { Schema } = mongoose


export const InfoSchema = new Schema({
  content: String,
  title: {
    required: true,
    type: String,
  },
})


const Info = mongoose.model('Info', InfoSchema)


export default Info