import { Router } from "express"
import { MessagesController } from "./controllers/messagesController"
import { SettingsController } from "./controllers/settingsController"
import { UserController } from "./controllers/usersController"

const routes = Router()

const settingsController = new SettingsController()
const usersController = new UserController()
const messagesController = new MessagesController()

routes.post("/settings", settingsController.create)
routes.post("/users", usersController.create)
routes.post("/messages", messagesController.create)
routes.get("/messages/:id", messagesController.showByUser)

export {routes}