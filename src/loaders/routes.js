import { Router } from "express"
import userRouter from "../api/user/user.route.js"
import AuthRouter from "../api/auth/auth.route.js"
import todoRouter from "../api/todo/todo.route.js"

const router = Router()

router.use("/users", userRouter)
router.use("/auth", AuthRouter)
router.use("/todos", todoRouter)

export default router
