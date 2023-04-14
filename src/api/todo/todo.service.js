import Todo from "../../models/todo.model.js"
import User from "../../models/user.model.js"
import { StatusCodes } from "http-status-codes"
import { CustomError } from "../../utils/errors.js"

export const create = async (todoData, userId) => {
  logger.info("Creating a new todo", { ...todoData, userId })

  const user = await User.findById(userId)
  if (!user) throw new CustomError(StatusCodes.NOT_FOUND, "User not found")

  const todo = new Todo({ ...todoData, user: userId })
  await todo.save()

  logger.info(`Todo ${todo._id} created successfully.`)
  return todo
}

export const findById = async (todoId, userId) => {
  logger.info(`Finding todo ${todoId} for user ${userId}`)

  const todo = await Todo.findOne({ _id: todoId, user: userId })
  if (!todo) throw new CustomError(StatusCodes.NOT_FOUND, "Todo not found.")
  return todo
}


export const updateById = async (todoId, todoData, userId) => {
  logger.info(`Updating todo ${todoId} for user ${userId}`)

  const todo = await Todo.findByIdAndUpdate({ _id: todoId, user: userId }, todoData, { new: true })
  if (!todo) throw new CustomError(StatusCodes.NOT_FOUND, "Todo not found")
  return todo
}

export const deleteById = async (todoId, userId) => {
  const result = await Todo.deleteOne({ _id: todoId, user: userId })

  if (result.deletedCount === 0) {
    throw new CustomError(StatusCodes.NOT_FOUND, "Todo not found")
  }

  logger.info(`Todo ${todoId} for user ${userId} deleted successfully`)

  return result
}
