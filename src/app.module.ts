import { Module } from '@nestjs/common';
import { MainController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [MainController],
  providers: [],
  exports: [],
})
export class AppModule {}
