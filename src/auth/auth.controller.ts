import { Body, Controller, ParseIntPipe, Post, Req, HttpCode, HttpStatus } from "@nestjs/common";
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
    //@Body() dto: AuthDto
    //@Body('email') email: string, @Body('password' ,ParseIntPipe) password

    @HttpCode(HttpStatus.OK)
    @Post('signup')
    signup(@Body() dto: AuthDto) {
        //console.log(dto)
        return this.authService.signup(dto)
    }


    @Post('signin')
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto)
    }
}