import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { OutgoingMessage } from 'http';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor (
        private readonly carsService: CarsService 
    ) {}

    @Get()
    getAllCars() {
        return {
            data:  this.carsService.findAll(),
            message: 'successful'
        };
    }

    @Get(':id')
    getCarById( @Param('id', ParseIntPipe ) id: number ) {
        console.log(id);
        return {
            data: (this.carsService.findById(id) == null ) ?
                {}:
                this.carsService.findById(id),
            message: (this.carsService.findById(id) == null ) ?
                'Not found': 
                'Successful'
        };
    }

    @Post()
    createCar( @Body() body: any ) {
        return{ data: body, message:'Post' };
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any ) { 
        return { 
            data: body,
            message:'Patch' 
        };
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe) id: number ){
        return{ id_deleted: id, message:'Delete' };
    }

}
