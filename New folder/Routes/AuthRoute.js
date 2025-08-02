import express from "express"
import { logInController, signUpController } from "../Controllers/AuthControllers.js"

const AuthRouter = express.Router()

AuthRouter.post("/signup" , signUpController)
AuthRouter.post("/login" , logInController)

export default AuthRouter