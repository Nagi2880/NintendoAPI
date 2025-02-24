import { Module } from '@nestjs/common';
import { PrismaService } from './Prisma.service';   
import { Global } from '@nestjs/common';

@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}
