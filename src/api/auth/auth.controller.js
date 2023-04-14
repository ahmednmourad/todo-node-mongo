import * as Auth from "./auth.service.js"

export const login = async (req, res) => {
  const { email, password } = req.body

  const result = await Auth.login(email, password)

  return res.status(200).json({ message: "Login successful", data: result })
}
