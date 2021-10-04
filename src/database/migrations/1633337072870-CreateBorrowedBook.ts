import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBorrowedBook1633337072870 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "borrowed_book",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "library_lent",
            type: "uuid",
          },
          {
            name: "user_borrowed",
            type: "uuid",
          },
          {
            name: "book_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKLibraryLentBorrowed_Book",
            referencedTableName: "books",
            referencedColumnNames: ["id"],
            columnNames: ["library_lent"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKLibraryUserBorrowed_Book",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_borrowed"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("borrowed_book");
  }
}
