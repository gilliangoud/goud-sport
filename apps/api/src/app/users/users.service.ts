import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService extends RepositoryService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }
}
