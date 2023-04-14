import { Router } from "express"
import { isAuth, validateSchema } from "../../middlewares/index.js"
import {
  createTodoSchema,
  deleteTodoSchema,
  getTodoSchema,
  updateTodoSchema,
} from "./todo.validation.js"
import * as todoControllers from "./todo.controller.js"

const router = Router()

router
  .post("/", isAuth, validateSchema(createTodoSchema.body), todoControllers.create)
  .get("/:todoId", isAuth, validateSchema(getTodoSchema.path, "params"), todoControllers.findById)
  .put(
    "/:todoId",
    isAuth,
    validateSchema(updateTodoSchema.path, "params"),
    validateSchema(updateTodoSchema.body),
    todoControllers.updateById,
  )
  .delete(
    "/:todoId",
    isAuth,
    validateSchema(deleteTodoSchema.path, "params"),
    todoControllers.deleteById,
  )

export default router
