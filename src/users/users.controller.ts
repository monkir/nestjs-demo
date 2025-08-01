import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService){}

    @Get()
    async getAllUsers(){
        return await this.usersService.users();
    }
}
