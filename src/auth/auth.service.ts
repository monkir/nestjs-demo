import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) { }

  async signup(createUserDto: any) {
    // Check if user exists
    const existingEmail = await this.usersService.findOneByEmail(
      createUserDto.email,
    );
    if (existingEmail) {
      throw new ConflictException('Email already exists');
    }

    // Hash password
    const hashedPassword = await this.hashPassword(createUserDto.password);

    // Create user
    return this.usersService.createUser({
      ...createUserDto,
      password: hashedPassword,
    });
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await bcrypt.compare(pass, user.Password))) {
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const foundedUser = await this.usersService.findOneByEmail(user.email);
    if (!foundedUser) {
      throw new UnauthorizedException('User not found');
    }
    const { Password, ...payload } = foundedUser;
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
        expiresIn: '7d',
      }),
      user,
    };
  }

  async refreshTokens(user: any) {
    const foundedUser = await this.usersService.findOneByEmail(user.email);
    if (!foundedUser) {
      throw new UnauthorizedException('User not found');
    }
    const { Password, ...payload } = foundedUser;
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
}
