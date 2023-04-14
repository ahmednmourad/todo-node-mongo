import jwt from "jsonwebtoken"
import config from "../config/index.js"

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, config.auth.accessTokenSecretKey, {
    expiresIn: config.auth.accessTokenExpiration,
  })
}
