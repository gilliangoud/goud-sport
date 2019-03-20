import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Feature, Crud } from '@nestjsx/crud';
import { User } from './users.entity';

@Crud(User, {
  options: {
    exclude: ['password'],
    join: {
      profile: {
        allow: ['firstName', 'lastName'],
      },
    },
    maxLimit: 10,
    cache: 3000,
  },
  params: ['companyId'],
  validation: {
    validationError: {
      target: false,
      value: false,
    },
  },
})
@Feature('users')
@Controller('users')
export class UsersController {
  constructor(public service: UsersService) {}
}
