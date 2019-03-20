import { Controller } from '@nestjs/common';
import { Crud, Feature } from '@nestjsx/crud';

import { Athlete } from './athletes.entity';
import { AthletesService } from './athletes.service';

@Feature('Athletes')
@Crud(Athlete)
@Controller('athletes')
export class AthletesController {
  constructor(public service: AthletesService) {}
}
