import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";


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

    //@Req() req: Request
    @Post('signup')
    signup(@Body() dto: AuthDto) {
        console.log(dto)
        return this.authService.signup()
    }


    @Post('signin')
    signin() {
        return this.authService.signin()
    }
}