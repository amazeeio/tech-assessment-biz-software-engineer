import { Injectable } from '@nestjs/common';
import { BookDTO } from './book.dto';

@Injectable()
export class BooksService {
  private books: BookDTO[] = [
    { id: '1', title: 'Dune', author: 'Frank Herbert' },
    { id: '2', title: '1984', author: 'George Orwell' },
    { id: '3', title: 'Neuromancer', author: 'William Gibson' },
    { id: '4', title: 'Foundation', author: 'Isaac Asimov' },
    { id: '5', title: 'Brave New World', author: 'Aldous Huxley' },
  ];

  getBooks(): BookDTO[] {
    return this.books;
  }

  createBook(book: BookDTO): void {
    this.books.push(book);
  }

  updateBook(id: string, title: string, author: string): boolean {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books[bookIndex] = { ...this.books[bookIndex], title, author };
      return true;
    }
    return false;
  }

  deleteBook(id: string): boolean {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
      return true;
    }
    return false;
  }
}
