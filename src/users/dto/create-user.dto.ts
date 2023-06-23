// dto = Data Transfer Object
/* é um objeto usado para encapsular dados a serem enviados de uma
aplicação para outra, ou seja, nos ajudam a definir as interfaces
ou quais informações que são recebidas no body/payload da requisição. */

import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly address: string;

  @IsString()
  readonly payment: string;
}
