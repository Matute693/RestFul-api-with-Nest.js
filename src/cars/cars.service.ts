import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Cars } from './interfaces/car.interface';
import { UpdateCarDto, CreateCarDto } from './dto/index'

@Injectable()
export class CarsService {

    //mockeamos una base de datos
    private cars: Cars[] =  [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Celica'
        },
        {
            id: uuid(),
            brand: 'Hyundai',
            model: 'Genesis'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Accord'
        },
        {
            id: uuid(),
            brand: 'Renault',
            model: 'Mondeo'
        },
        {
            id: uuid(),
            brand: 'Volkswagen',
            model: 'Passat'
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneByID( id: string ) {
        const car = this.cars.find( car => car.id ===  id);
        if(!car) throw new NotFoundException(`Car with ${ id } not found`)
        return car;
    }

    createCar( createCarDto: CreateCarDto) {
       const newCar: Cars = {
           id: uuid(),
           ...createCarDto
        //    brand: createCarDto.brand,
        //    model: createCarDto.model
       }
        this.cars.push(newCar)
        return newCar
    }

    updateCar( id: string, updateCarDto: UpdateCarDto ) {
        let carDB = this.findOneByID(id);

        if( updateCarDto.id && updateCarDto.id  !== id)
            throw new BadRequestException(`The car not found`);

        this.cars = this.cars.map( car => {
            if( car.id === id) {
                return { ...carDB, ...updateCarDto, id }
            }
            return car;
        })

        return carDB;
    }

    deleteCar( id: string ) {
        this.findOneByID(id);
        this.cars = this.cars.filter( car => car.id !== id)
    }

}
