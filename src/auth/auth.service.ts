import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
@Injectable()
export class AuthService {

    constructor(private prismaService: PrismaService) {

    }
    async signup(dto : AuthDto) {
        
        let hash = await argon.hash(dto.password)

        try {
            const user = await this.prismaService.user.create({
                data: {
                    email: dto.email,
                    hash
                }
            })
    
            delete user.hash
            return user;
        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError) {
                if(error.code == 'P2002') {
                    throw new ForbiddenException('Credentials taken')
                }
                throw error;
            }
        }
        
    }

    signin() {
        return 'I am signin'
    }
}