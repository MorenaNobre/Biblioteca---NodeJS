import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateBookController } from "./controllers/CreateBookController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createBookController = new CreateBookController();

router.post("/users", createUserController.handle);
router.post("/books", ensureAdmin, createBookController.handle);

export { router };
