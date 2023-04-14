import * as Todo from "./todo.service.js"
import { buildTodoResponseDTO } from "./todo.mapper.js"

export const create = async (req, res) => {
  const { userId, body } = req

  const todo = await Todo.create(body, userId)

  return res.status(201).json({ message: "Todo created.", data: buildTodoResponseDTO(todo) })
}

export const findById = async (req, res) => {
  const { userId } = req
  const { todoId } = req.params

  const todo = await Todo.findById(todoId, userId)

  return res.status(200).json({ message: "Todo found.", data: buildTodoResponseDTO(todo) })
}

export const updateById = async (req, res) => {
  const { todoId } = req.params
  const { userId, body } = req

  const todo = await Todo.updateById(todoId, body, userId)

  return res.status(200).json({ message: "Todo updated.", data: buildTodoResponseDTO(todo) })
}

export const deleteById = async (req, res) => {
  const { userId } = req
  const { todoId } = req.params

  await Todo.deleteById(todoId, userId)

  return res.status(200).json({ message: "Todo deleted." })
}
