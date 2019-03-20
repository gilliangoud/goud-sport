import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Competition } from './competitions.entity';

@Injectable()
export class CompetitionsService extends RepositoryService<Competition> {
  constructor(@InjectRepository(Competition) repo) {
    super(repo);
  }
}
