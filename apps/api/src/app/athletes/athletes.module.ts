import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Athlete } from './athletes.entity';
import { AthletesService } from './athletes.service';
import { AthletesController } from './athletes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Athlete])],
  providers: [AthletesService],
  exports: [AthletesService],
  controllers: [AthletesController],
})
export class AthletesModule {}
