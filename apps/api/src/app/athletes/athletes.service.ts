import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';

import { Athlete } from './athletes.entity';

@Injectable()
export class AthletesService extends RepositoryService<Athlete> {
  constructor(@InjectRepository(Athlete) repo) {
    super(repo);
  }
}
