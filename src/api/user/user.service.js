import User from "../../models/user.model.js"
import { CustomError } from "../../utils/index.js"
import { StatusCodes } from "http-status-codes"
import bcrypt from "bcrypt"

export const create = async (userData) => {
  if (await doesEmailExist(userData.email))
    throw new CustomError(StatusCodes.BAD_REQUEST, "Email already exists")

  const payload = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: await bcrypt.hash(userData.password, 10),
  }
  const user = new User(payload)
  await user.save()
  return user
}

const doesEmailExist = async (email) => {
  return await User.findOne({ email })
}

export const getById = async (userId) => {
  const user = await User.findById(userId)
  if (!user) throw new CustomError(StatusCodes.NOT_FOUND, "User not found")
  return user
}

export const update = async (userId, userData) => {
  if (await doesEmailExist(userData.email))
    throw new CustomError(StatusCodes.BAD_REQUEST, "Email already exists")

  const user = await User.findByIdAndUpdate(userId, userData, { new: true })
  if (!user) throw new CustomError(StatusCodes.NOT_FOUND, "User not found")
  return user
}
