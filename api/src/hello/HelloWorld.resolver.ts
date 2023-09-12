import { Query, Resolver, Args } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  hello(@Args('name', { nullable: true }) name: string) {
    return `Howdy, ${name}!`;
  }
}
