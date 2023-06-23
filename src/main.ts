import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // auxilia na validação dos dados enviados ao back
  app.useGlobalPipes(
    new ValidationPipe({
      /* não permite que um novo cadastro seja realizado
      caso sejam passadas informações que não são esperadas,
      ou seja, se não é pedido o sexo do usuário e o mesmo
      informar, esse cadastro não será realizado */
      whitelist: true,
      forbidNonWhitelisted: true,
      /* Transforma os dados que chegam pelo body/payload
      com a tipagem do Dto */
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
