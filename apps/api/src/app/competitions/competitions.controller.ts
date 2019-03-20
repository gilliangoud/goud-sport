import { Controller, UseGuards } from '@nestjs/common';
import { CompetitionsService } from './competitions.service';
import { Crud, Feature } from '@nestjsx/crud';
import { Competition } from './competitions.entity';
import { AuthGuard } from '@nestjs/passport';

@Feature('competitions')
@Crud(Competition)
@UseGuards(AuthGuard('jwt'))
@Controller('competitions')
export class CompetitionsController {
  constructor(public service: CompetitionsService) {}
}
