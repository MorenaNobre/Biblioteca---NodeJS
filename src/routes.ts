import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateBookController } from "./controllers/CreateBookController";

const router = Router();

const createUserController = new CreateUserController();
const createBookController = new CreateBookController();

router.post("/users", createUserController.handle);
router.post("/books", createBookController.handle);

export { router };
