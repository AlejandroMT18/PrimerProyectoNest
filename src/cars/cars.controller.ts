import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars = ['Toyota', 'Honda', 'Jeep'];

    @Get()
    getAllCars() {
        return this.cars;    
    };

    @Get(':id')
    getCarById( @Param('id') id ) {
        console.log(id);
        return {
            id: this.cars[id]
        };
    }
}