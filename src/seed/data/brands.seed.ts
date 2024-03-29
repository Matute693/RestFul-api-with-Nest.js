
import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
   
    {
        id: uuid(),
        name: 'Fiat',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Mercedes Benz',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Volvo',
        createdAt: new Date().getTime()
    }
]
