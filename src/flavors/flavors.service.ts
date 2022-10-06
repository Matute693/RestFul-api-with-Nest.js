import { Injectable } from '@nestjs/common';

@Injectable()
export class FlavorsService {

    private flavors = [
        {
            id: 1,
            name: 'Chocolate'
        },
        {
            id: 2,
            name: 'Frutilla'
        },
        {
            id: 3,
            name: 'Crema Rusa'
        },
        {
            id: 4,
            name: 'Mascarpone'
        },
    ];

    getFlavors() {
        return this.flavors;
    }

    getAllFlavorsById( id:number ) {
        const flavor = this.flavors.find( flavor => flavor.id === id )
        return flavor
    }
}
