import Ajv from "ajv"
import addFormats from "ajv-formats"
import { ValidationError } from "../utils/index.js"

const ajv = new Ajv({ allErrors: true })
addFormats(ajv)

ajv.addFormat("mongo-id", /^[a-fA-F0-9]{24}$/)

const validateSchema = (schema, type = "body") => {
  return (req, res, next) => {
    const validate = ajv.compile(schema)
    const data = req[type]

    const valid = validate(data)
    if (!valid) return next(new ValidationError(validate.errors))
    next()
  }
}

export { validateSchema }
