import { Controller } from '@nestjs/common';
import { CompetitionsService } from './competitions.service';
import { Crud, Feature } from '@nestjsx/crud';
import { Competition } from './competitions.entity';

@Feature('competitions')
@Crud(Competition)
@Controller('competitions')
export class CompetitionsController {
  constructor(public service: CompetitionsService) {}
}
