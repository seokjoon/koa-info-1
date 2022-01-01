import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const { Schema } = mongoose

export const UserSchema = new Schema({
  createdAt: {
    default: Date.now,
    type: Date,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  name: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
    unique: true,
  },
  updatedAt: {
    default: Date.now,
    type: Date,
  },
})


/**
 * @memberOf User#
 */
UserSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}


/**
 * @memberOf User#
 */
UserSchema.methods.serialize = function () {
  const outs = this.toJSON()
  delete outs.password
  return outs
}


/**
 * @memberOf User#
 */
UserSchema.methods.setPassword = async function(password) {
  this.password = await bcrypt.hash(password, 10)
}


/**
 * @memberOf User#
 */
UserSchema.methods.setToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    },
  )
}


/**
 * @memberOf User
 * @returns {Promise<User>}
 */
UserSchema.statics.findByUsername = function findByUsername (username) {
  return this.findOne({ username })
}


/**
 * @class User
 * https://intellij-support.jetbrains.com/hc/en-us/community/posts/207115889-Mongoose-static-methods-autocompletion-in-WebStorm
 */
const User = mongoose.model('User', UserSchema)


export default User