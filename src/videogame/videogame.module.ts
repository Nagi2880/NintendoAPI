import { Module } from '@nestjs/common';
import { VideogameService } from './videogame.service';
import { VideogameController } from './videogame.controller';

@Module({
  controllers: [VideogameController],
  providers: [VideogameService],
})
export class VideogameModule {}
