import {Request, Response} from "express";
import {CreateBookService} from "../services/CreateBookService"

class CreateBookController {
  async handle(request: Request, response: Response) {
    const { title, genre, description, borrowed } = request.body
    const createBookService = new CreateBookService();

    const book = await createBookService.execute({title, genre, description, borrowed})

    return response.json(book);
  }
}

export { CreateBookController };
