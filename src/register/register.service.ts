import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegisterDto } from './dto/create-register.dto';
import { Register } from './entities/register.entity';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterService {
  constructor(
    @Inject('REGISTER_REPOSITORY')
    private readonly registerRepository: Repository<Register>,
  ) {}

  async findAll() {
    return this.registerRepository.find();
  }

  async findOne(id: number) {
    const register = await this.registerRepository.findOne({ where: { id } });

    if (!register) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return register;
  }

  create(createRegisterDto: CreateRegisterDto) {
    const register = this.registerRepository.create(createRegisterDto);

    /* o método save retorna uma promessa não resolvida, mas nesse caso,
    não é necessário usar async/await porque o return só vai acontecer
    depois que essa promessa for resolvida */
    return this.registerRepository.save(register);
  }

  async update(id: number, updateRegisterDto: UpdateRegisterDto) {
    // vai pré carregar o objeto
    const register = await this.registerRepository.preload({
      id,
      ...updateRegisterDto,
    });

    console.log(register);

    if (!register) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return this.registerRepository.save(register);
  }

  async remove(id: number) {
    const register = await this.registerRepository.findOne({ where: { id } });

    if (!register) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return this.registerRepository.remove(register);
  }
}
