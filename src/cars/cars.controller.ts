import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { createCarDto } from './dto/create-car.dto';

@Controller('cars')
// Validador a nivel de Controlador
// @UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return {
      data: this.carsService.findAll(),
      message: 'successful',
    };
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return {
      data:
        this.carsService.findById(id) == null
          ? {}
          : this.carsService.findById(id),
      message:
        this.carsService.findById(id) == null ? 'Not found' : 'Successful',
    };
  }

  @Post()
  // Validador a nivel de método
  // @UsePipes(ValidationPipe)
  createCar(@Body() car: createCarDto) {
    return { data: car, message: 'Post' };
  }

  @Patch(':id')
  updateCar(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() body: any,
  ) {
    return {
      data: body,
      message: 'Patch',
    };
  }

  @Delete(':id')
  deleteCar(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return { id_deleted: id, message: 'Delete' };
  }
}
