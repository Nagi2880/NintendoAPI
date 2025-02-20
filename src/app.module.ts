import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideogameModule } from './videogame/videogame.module';

@Module({
  imports: [VideogameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
