import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of books', () => {
    const result = service.getBooks();
    expect(Array.isArray(result)).toBe(true);
  });

  describe('createBook', () => {
    it('should create a new book', () => {
      const initialLength = service.getBooks().length;
      const newBook = { id: '6', title: 'New Book', author: 'New Author' };

      service.createBook(newBook);

      const books = service.getBooks();
      expect(books).toContainEqual(newBook);
      expect(books.length).toBe(initialLength + 1);
    });
  });

  describe('updateBook', () => {
    it('should update an existing book', () => {
      const updatedBook = {
        id: '1',
        title: 'Updated Title',
        author: 'Updated Author',
      };

      service.updateBook(updatedBook.id, updatedBook.title, updatedBook.author);

      const books = service.getBooks();
      const book = books.find((b) => b.id === updatedBook.id);
      expect(book).toEqual(updatedBook);
    });

    it('should return false for non-existing book', () => {
      const result = service.updateBook(
        'nonexistent-id',
        'Updated Title',
        'Updated Author',
      );
      expect(result).toBe(false);
    });
  });

  describe('deleteBook', () => {
    it('should delete an existing book', () => {
      const bookToDelete = service.getBooks()[0];

      service.deleteBook(bookToDelete.id);

      const books = service.getBooks();
      expect(books).not.toContainEqual(bookToDelete);
    });

    it('should return false for non-existing book', () => {
      const result = service.deleteBook('10');
      expect(result).toBe(false);
    });
  });
});
