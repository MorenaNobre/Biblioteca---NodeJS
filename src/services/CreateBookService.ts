import { getCustomRepository } from "typeorm";
import { BooksRepositories } from "../repositories/BooksRepositories";

interface IUseRequest {
  title: string;
  genre: string;
  description: string;
  borrowed: boolean;
}

class CreateBookService {
  async execute({ title, genre, description, borrowed }: IUseRequest) {
    const booksRepositories = getCustomRepository(BooksRepositories);

    if (!title) {
      throw new Error("Title does not exists.");
    }

    //SELECT * FROM BOOKS WHERE NAME = 'title'
    const bookAlreadyExists = await booksRepositories.findOne({
      title,
    });

    if (bookAlreadyExists) {
      throw new Error("Book already exists!");
    }

    const book = booksRepositories.create({
      title,
      genre,
      description,
      borrowed,
    });

    await booksRepositories.save(book);

    return book;
  }
}

export { CreateBookService };
