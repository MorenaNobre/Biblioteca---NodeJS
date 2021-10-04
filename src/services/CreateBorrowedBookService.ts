import { getCustomRepository } from "typeorm";
import { BorrowedBookRepostories } from "../repositories/BorrowedBookRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IBorrowedBookRequest {
  book_id: string;
  library_lent: string;
  user_borrowed: string;
}

class CreateBorrowedBookService {
  async execute({
    book_id,
    library_lent,
    user_borrowed,
  }: IBorrowedBookRequest) {
    const borrowedBookRepostories = getCustomRepository(
      BorrowedBookRepostories
    );
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userBorrowedExists = await usersRepositories.findOne(user_borrowed);

    if (library_lent === user_borrowed) {
      throw new Error("User can not lent a book!");
    }

    if (!userBorrowedExists) {
      throw new Error("User does not exists to borrow a book!");
    }

    const bookBorrowed = borrowedBookRepostories.create({
      book_id,
      library_lent,
      user_borrowed,
    });

    await borrowedBookRepostories.save(bookBorrowed);

    return bookBorrowed
  }
}

export { CreateBorrowedBookService };
