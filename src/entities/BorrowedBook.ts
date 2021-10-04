import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, OneToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Book } from "./Book";
import { User } from "./User";

@Entity("borrowed_books")
class BorrowedBook {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  library_lent: string;

  @JoinColumn({name: "library_lent"})
  @OneToOne(() => Book)
  libraryLent: Book;

  @Column()
  user_borrowed: string;

  @JoinColumn({name: "user_borrowed"})
  @OneToOne(() => User)
  userBorrowed: User;

  @Column()
  book_id: string;

  @JoinColumn({name: "book_id"})
  @OneToOne(() => Book)
  book: Book;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { BorrowedBook };
