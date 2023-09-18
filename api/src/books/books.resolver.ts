import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { BookDTO } from './book.dto';
import { Injectable } from '@nestjs/common';
import { BooksService } from './books.service';

// this code currently is synchronous since it works with local array and it doesn't require any async communication
// with database so it works good. In case if we would have had async communicating we would need to introduce
// error handling and async functions with async/await keywords

@Injectable()
@Resolver(() => BookDTO)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => [BookDTO])
  getBooks(): BookDTO[] {
    return this.booksService.getBooks();
  }

  @Mutation(() => Boolean)
  createBook(
    @Args('title') title: string,
    @Args('author') author: string,
  ): boolean {
    const newBook: BookDTO = {
      id: (this.getBooks().length + 1).toString(),
      title,
      author,
    };
    this.booksService.createBook(newBook);
    return true;
  }

  @Mutation(() => Boolean)
  updateBook(
    @Args('id') id: string,
    @Args('title') title: string,
    @Args('author') author: string,
  ): boolean {
    return this.booksService.updateBook(id, title, author);
  }

  @Mutation(() => Boolean)
  deleteBook(@Args('id') id: string): boolean {
    return this.booksService.deleteBook(id);
  }
}
