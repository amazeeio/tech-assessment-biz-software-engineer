import { Test, TestingModule } from '@nestjs/testing';
import { BooksResolver } from './books.resolver';

describe('BooksResolver', () => {
  let resolver: BooksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksResolver],
    }).compile();

    resolver = module.get<BooksResolver>(BooksResolver);
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
});
