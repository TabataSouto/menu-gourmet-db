/* A entidade é uma classe que vai mapear uma tabela do banco de dados,
onde usamos essa mapeamento na classe (na entidade) com seus respectivos
decorators */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('register')
export class Register {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
