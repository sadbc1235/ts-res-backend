import { Module } from '@nestjs/common';
import { ResController } from './res.controller';
import { ResService } from './res.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ResController],
  providers: [ResService, PrismaService],
})
export class ResModule {}
