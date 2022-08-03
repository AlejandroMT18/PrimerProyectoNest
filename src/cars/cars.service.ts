import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: 3,
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ]

    findAll(){ 
        if ( !this.cars ) throw new NotFoundException('No cars found');
        return this.cars; 
    }

    findById(id: number){
        const car = this.cars.find( car => car.id === id );
        
        if (!car) throw new NotFoundException(`The car with the id ${id} not found`);

        return car;
    }

}
