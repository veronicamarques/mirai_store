import { Router } from "express";
import sessionController from "./controllers/sessionController";
import usersController from "./controllers/usersController";
import auth from "./middlewares/auth";

const routes = new Router();

routes.post("/login", sessionController.create);
routes.post("/users", usersController.create);

routes.get("/confirmation/:token", usersController.confirm_email);
routes.get("/password-reset/:email", usersController.password_reset);
routes.put("/password-change", usersController.password_change);

routes.use(auth);

routes.get("/users", usersController.index);
routes.put("/users/:id", usersController.update);
routes.delete("/users/:id", usersController.destroy);

export default routes;
