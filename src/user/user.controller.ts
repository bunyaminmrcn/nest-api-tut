import { Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorators';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {

    
    @Get('me')
    getMe(@GetUser('id') userId: number, @GetUser('email') email: number) {

        console.log(email)
        return userId
    }

    @Patch()
    editUser() {

    }
}
