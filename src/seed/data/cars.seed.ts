
import { v4 as uuid } from 'uuid';
import { Cars } from '../../cars/interfaces/car.interface';

export const CARS_SEED: Cars[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
    },
    {
        id: uuid(),
        brand: 'Renault',
        model: 'Megane'
    },
]