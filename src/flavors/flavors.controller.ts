import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FlavorsService } from './flavors.service';

@Controller('flavors')
export class FlavorsController {

    constructor( private readonly flavorService: FlavorsService) {}


    @Get()
        getFlavors() {
            return this.flavorService.getFlavors();
        }

        @Get(':id')
        getIdFlavors( @Param('id', ParseIntPipe) id: number ) {
            return this.flavorService.getAllFlavorsById(Number(id))
        }
}
