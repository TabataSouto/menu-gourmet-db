import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

/* PartialType - informa que o que precisa ser validade no UpdateUserDto,
é parte do que tem no CreateUserDto, ou seja, pode receber uma só
informação dentre todas as existentes em CreateUserDto que será considerado
e a validação do tipo de informação será feita. É a mesma coisa que dizer que:
todos os campos em CreateUserDto são opcionais em UpdateUserDto. */
export class UpdateUserDto extends PartialType(CreateUserDto) {}
