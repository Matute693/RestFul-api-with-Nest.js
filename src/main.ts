import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina del response la informacion basura (inventada) que me envia el usuario ver metodo post /cars CARSDTO
      forbidNonWhitelisted: true, // return Error 400 cuando el usuario me envia informacion en el body que no corresponde
    })
  )

  await app.listen(3000);
}
bootstrap();
