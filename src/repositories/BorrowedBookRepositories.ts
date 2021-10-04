import { Repository, EntityRepository } from "typeorm"
import { BorrowedBook } from "../entities/BorrowedBook"

@EntityRepository(BorrowedBook)
class BorrowedBookRepostories extends Repository<BorrowedBook> {
  
}

export {BorrowedBookRepostories}