import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller('auth')
export class AuthController {

    /*
    authService: AuthService;
    constructor (authService: AuthService) {
        this.authService = authService;
    }
    */
    constructor(private authService: AuthService) { // this is shorthand of top lines

    }

    // /auth/signup
    @Post('signup')
    signup() {

    }


    @Post('signin')
    signin() {
        
    }
}