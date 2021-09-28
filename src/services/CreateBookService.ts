import { getCustomRepository } from "typeorm";
import { BooksRepositories } from "../repositories/BooksRepositories";

interface IRequestBook {
  title: string;
  genre: string;
  description: string;
  borrowed?: boolean;
}

class CreateBookService {
  async execute({ title, genre, description, borrowed }: IRequestBook) {
    const booksRepositories = getCustomRepository(BooksRepositories);

    if (!title) {
      throw new Error("This Title does not exists");
    }

    const bookAlreadyExists = await booksRepositories.findOne({ title });
  }

  
}

export { CreateBookService };
