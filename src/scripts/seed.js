import mongoose from "mongoose"
import User from "../models/user.model.js"
import Todo from "../models/todo.model.js"
import config from "../config/index.js"
import { logger } from "../loaders/logger.js"

await mongoose.connect(config.db.mongodb.uri, config.db.mongodb.connectOptions)

const seedUsers = [
  { firstName: "John", lastName: "Doe", email: "john@example.com", password: "password123" },
  { firstName: "Jane", lastName: "Doe", email: "jane@example.com", password: "password456" },
]

const clearDb = async () => {
  await User.deleteMany({})
  await Todo.deleteMany({})
}

const seedDb = async () => {
  const users = await User.insertMany(seedUsers)
  logger.info(`Created ${seedUsers.length} users`)

  const seedTodos = [
    { title: "Buy groceries", description: "Milk, bread, eggs", user: users[0]._id },
    { title: "Do laundry", description: "Wash clothes", user: users[0]._id },
    { title: "Walk the dog", description: "Take lucky for a walk", user: users[1]._id },
  ]
  await Todo.insertMany(seedTodos)
  logger.info(`Created ${seedTodos.length} todos`)
}

await clearDb()
await seedDb()

await mongoose.connection.close()
