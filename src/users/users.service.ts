import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/_db/entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async user(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ Id: id });
  }

  async users(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(data: CreateUserDto): Promise<User> {
    return this.userRepository.save(data);
  }

  async updateUser(id: number, data: UpdateUserDto): Promise<UpdateResult> {
    return await this.userRepository.update(id, data);
  }

  async deleteUser(id): Promise<DeleteResult> {
    return await this.userRepository.delete({ Id: id });
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({ Email: email });
  }
}
