import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateBookController } from "./controllers/CreateBookController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const createUserController = new CreateUserController();
const createBookController = new CreateBookController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle);
router.post("/books", ensureAdmin, createBookController.handle);
router.post("/login", ensureAdmin, authenticateUserController.handle);

export { router };
