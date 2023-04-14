import { Router } from "express"
import { validateSchema } from "../../middlewares/index.js"
import * as controllers from "./auth.controller.js"
import * as validations from "./auth.validation.js"

const router = Router()

router.post("/login", validateSchema(validations.login.body), controllers.login)

export default router
