import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookDTO } from './book.dto';
import { Injectable } from '@nestjs/common';
import { BooksService } from './books.service';

@Injectable()
@Resolver(() => BookDTO)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) { }

  @Query(() => [BookDTO])
  getBooks(): BookDTO[] {
    return this.booksService.getBooks();
  }

  @Mutation(() => Boolean)
  createBook(): boolean {
    // TODO: implement
    return true;
  }

  // TODO: implement update/delete mutations
}
