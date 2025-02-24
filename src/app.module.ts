import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideogameModule } from './videogame/videogame.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [VideogameModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
