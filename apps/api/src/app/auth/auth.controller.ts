import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { AuthService } from './auth.service';
import { Payload } from '@goud-sport/api-interface';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() userDTO: LoginDTO) {
    const user = await this.userService.getMany(userDTO);
    const payload = {
      username: user.username,
      seller: user.seller,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Post('register')
  async register(@Body() userDTO: RegisterDTO) {
    const user = await this.userService.createOne(userDTO);
    const payload: Payload = {
      username: user.email,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }
}
