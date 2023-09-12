import { Global, Module } from '@nestjs/common';
import { HelloWorldResolver } from './HelloWorld.resolver';

@Global()
@Module({
  providers: [HelloWorldResolver],
})
export default class HelloWorldModule { }
