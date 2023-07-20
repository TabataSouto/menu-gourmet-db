import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisterDto } from './create-register.dto';

/* PartialType - informa que o que precisa ser validade no UpdateRegisterDto,
é parte do que tem no CreateRegisterDto, ou seja, pode receber uma só
informação dentre todas as existentes em CreateRegisterDto que será considerado
e a validação do tipo de informação será feita. É a mesma coisa que dizer que:
todos os campos em CreateRegisterDto são opcionais em UpdateRegisterDto. */
export class UpdateRegisterDto extends PartialType(CreateRegisterDto) {}
