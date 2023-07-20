import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [RegisterModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
