import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsConfig = {
    origin: '*',
    credentials: true,
  };
  app.enableCors(corsConfig);

  await app.listen(3000);
  console.log('playground: http://localhost:3000/graphql');
}
bootstrap();
