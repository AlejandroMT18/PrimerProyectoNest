import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { createCarDto, updateCarDto } from './dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    if (!this.cars) throw new NotFoundException('No cars found');
    return this.cars;
  }

  findById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car)
      throw new NotFoundException(`The car with the id ${id} not found`);
    return car;
  }

  create(/*{ model, brand }*/ createCar: createCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCar,
    };

    /* 
    Opciones de como puede ser el newCar 
      {
      id: uuid(),
      brand: createCar.brand,
      model: createCar.model,
      }
      {
      id: uuid(),
      brand,
      model,
      }
    */

    this.cars.push(newCar);

    return newCar;
  }

  update(id: string, updateCar: updateCarDto) {
    let carDB = this.findById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCar,
        };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  delete(id: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const car = this.findById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
