import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("books")
class Book {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column()
  description: string;

  @Column()
  borrowed: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Book };
