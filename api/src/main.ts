import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsConfig = {
    // this should be changed for security reasons
    origin: '*',
    credentials: true,
  };
  app.enableCors(corsConfig);

  await app.listen(3000);
}
bootstrap();
