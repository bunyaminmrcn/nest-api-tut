import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2'
@Injectable()
export class AuthService {

    constructor(private prismaService: PrismaService) {

    }
    async signup(dto : AuthDto) {
        
        let hash = await argon.hash(dto.password)
        const user = await this.prismaService.user.create({
            data: {
                email: dto.email,
                hash
            }
        })

        delete user.hash
        return user;
    }

    signin() {
        return 'I am signin'
    }
}