import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { DatabaseModule } from 'src/database/database.module';
import { registerProviders } from './register.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [RegisterController],
  providers: [RegisterService, ...registerProviders],
})
export class RegisterModule {}
