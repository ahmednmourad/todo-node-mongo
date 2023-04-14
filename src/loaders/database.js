import mongoose from "mongoose"
import config from "../config/index.js"

const connectToDb = async () => {
  await mongoose.connect(config.db.mongodb.uri, config.db.mongodb.connectOptions)
  logger.info("Connected to database successfully.")
}

export { connectToDb }
