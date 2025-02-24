import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideogameModule } from './videogame/videogame.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [VideogameModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
