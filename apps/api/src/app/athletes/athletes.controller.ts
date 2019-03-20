import { Controller, UseGuards } from '@nestjs/common';
import { Crud, Feature } from '@nestjsx/crud';

import { Athlete } from './athletes.entity';
import { AthletesService } from './athletes.service';
import { AuthGuard } from '@nestjs/passport';

@Feature('Athletes')
@Crud(Athlete)
@UseGuards(AuthGuard('jwt'))
@Controller('athletes')
export class AthletesController {
  constructor(public service: AthletesService) {}
}
