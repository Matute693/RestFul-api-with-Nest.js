import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {


    private cars =  [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Celica'
        },
        {
            id: 2,
            brand: 'Hyundai',
            model: 'Genesis'
        },
        {
            id: 3,
            brand: 'Honda',
            model: 'Accord'
        }
    ];

    findAll() {
        return this.cars;
    }

    findOneByID( id: number ) {
        const car = this.cars.find( car => car.id === id )
        if(!car) throw new NotFoundException(`Car with ${ id } not found`)
        return car;
    }

}
