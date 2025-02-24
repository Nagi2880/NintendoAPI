import { Module } from '@nestjs/common';
import { VideogameService } from './videogame.service';
import { VideogameController } from './videogame.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [VideogameController],
  providers: [VideogameService],
  
})
export class VideogameModule {}
