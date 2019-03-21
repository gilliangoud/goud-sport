import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { User } from './users.entity';
import { LoginDTO } from '../auth/auth.dto';
import { Payload } from '@goud-sport/api-interface';

@Injectable()
export class UsersService extends RepositoryService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }

  async getByLogin(userDTO: LoginDTO): Promise<User> {
    const { email, password } = userDTO;
    const user = await this.repo.findOne({
      where: { email }
    });
    return user;
  }

  async getByPayload(payload: Payload): Promise<User> {
    const { email } = payload;
    const user = await this.repo.findOne({
      where: { email }
    });
    return user;
  }
}
