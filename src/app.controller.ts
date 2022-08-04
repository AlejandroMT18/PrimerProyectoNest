import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class MainController {
  constructor() {
    console.log('Main controller');
  }

  @Get('')
  welcome() {
    return 'Api Works Wuapo <3';
  }
}
