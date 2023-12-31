import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookDTO {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  author: string;
}
