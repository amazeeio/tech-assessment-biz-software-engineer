import { Test, TestingModule } from '@nestjs/testing';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';

describe('BooksResolver', () => {
  let resolver: BooksResolver;
  let booksService: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksResolver, BooksService],
    }).compile();

    resolver = module.get<BooksResolver>(BooksResolver);
    booksService = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('getBooks', () => {
    it('should return an array of books with correct properties', () => {
      const result = resolver.getBooks();

      // Check if result is an array
      expect(Array.isArray(result)).toBe(true);

      // Check if array is not empty
      expect(result.length).toBeGreaterThan(0);

      // Check if each object has the required properties and types
      result.forEach((book) => {
        expect(book).toHaveProperty('id');
        expect(typeof book.id).toBe('string');

        expect(book).toHaveProperty('title');
        expect(typeof book.title).toBe('string');

        expect(book).toHaveProperty('author');
        expect(typeof book.author).toBe('string');
      });
    });
  });

  describe('createBook', () => {
    it('should create a new book', () => {
      const mockCreateBook = jest.spyOn(booksService, 'createBook');

      const title = 'New Book Title';
      const author = 'New Book Author';

      resolver.createBook(title, author);

      expect(mockCreateBook).toHaveBeenCalledWith({
        id: expect.any(String),
        title,
        author,
      });
    });
  });

  describe('updateBook', () => {
    it('should update an existing book', () => {
      const mockUpdateBook = jest.spyOn(booksService, 'updateBook');

      const idToUpdate = '1';
      const newTitle = 'Updated Book Title';
      const newAuthor = 'Updated Book Author';

      resolver.updateBook(idToUpdate, newTitle, newAuthor);

      expect(mockUpdateBook).toHaveBeenCalledWith(
        idToUpdate,
        newTitle,
        newAuthor,
      );
    });
  });

  describe('deleteBook', () => {
    it('should delete an existing book', () => {
      jest.spyOn(booksService, 'deleteBook').mockReturnValue(true);

      const idToDelete = '1';

      const result = resolver.deleteBook(idToDelete);

      expect(result).toBe(true);
    });
  });
});
