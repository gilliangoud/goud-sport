import { Module } from '@nestjs/common';
import { CompetitionsController } from './competitions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Competition } from './competitions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Competition])],
  controllers: [CompetitionsController]
})
export class CompetitionsModule {}
