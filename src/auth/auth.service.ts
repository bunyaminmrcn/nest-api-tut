import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {

    constructor(private prismaService: PrismaService) {

    }
    signup() {
        return 'I am signup'
    }

    signin() {
        return 'I am signin'
    }
}