import mongoose from 'mongoose'
import { UserSchema } from './User.js'


const { Schema } = mongoose


export const InfoSchema = new Schema({
  content: String,
  dateCreate: {
    default: Date.now(),
    type: Date,
  },
  tags: [],
  title: {
    required: true,
    type: String,
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
  users: [UserSchema],
})


const Info = mongoose.model('Info', InfoSchema)


export default Info