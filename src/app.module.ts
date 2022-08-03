import { Module } from '@nestjs/common';
import { MainController } from './app.controller';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [CarsModule],
  controllers: [MainController],
  providers: [],
  exports: []
})
export class AppModule {}
