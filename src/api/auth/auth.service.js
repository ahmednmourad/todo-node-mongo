import User from "../../models/user.model.js"
import { CustomError, generateAccessToken } from "../../utils/index.js"
import { StatusCodes } from "http-status-codes"
import config from "../../config/index.js"
import bcrypt from "bcrypt"

export const login = async (email, password) => {
  const user = await User.findOne({ email })
  if (!user) throw new CustomError(StatusCodes.UNAUTHORIZED, "Invalid email or password")

  const isValidPassword = await bcrypt.compare(password, user.password)
  if (!isValidPassword)
    throw new CustomError(StatusCodes.UNAUTHORIZED, "Incorrect email or password")

  return {
    accessToken: generateAccessToken({ userId: user.id }),
    expiresIn: config.auth.accessTokenExpiration,
  }
}
