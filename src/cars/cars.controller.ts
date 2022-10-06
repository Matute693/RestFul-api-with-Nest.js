import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

  constructor( private readonly serviceCar: CarsService) {}
  
  @Get()
  getCars() {
    return this.serviceCar.findAll();
  }
  @Get(':id')
  get( @Param('id', ParseIntPipe) id: number) { 
    return this.serviceCar.findOneByID(Number(id))
  }
  
  @Post()
  createCar( @Body() payload: any ) {
    return {
      payload
    }
  }

  @Patch(':id')
  updateCar( @Body() payload: any ) {
    return {
      payload
    }
  }

  @Delete(':id')
  deleteCar( @Param('id', ParseIntPipe) id: number ) {
    return {
        method: 'delete',
        id
    }
  }
}
