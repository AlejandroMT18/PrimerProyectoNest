import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('/')
export class MainController {

    constructor () {}

    @Get('')
    welcome() {
        return 'Api Works Wuapo <3'
    };

}
