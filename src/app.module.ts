import { Module } from '@nestjs/common';
import { VideogameModule } from './videogame/videogame.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [VideogameModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
