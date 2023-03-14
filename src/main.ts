import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as logger from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  app.use(logger('combined'));
  await app.listen(4000);
}
bootstrap();
