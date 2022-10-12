import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes( ValidationPipe )
export class CarsController {

  constructor( private readonly serviceCar: CarsService) {}
  
  @Get()
  getCars() {
    return this.serviceCar.findAll();
  }

  @Get(':id')
  get( @Param('id', new ParseUUIDPipe({ version: '4'})) id: string) { 
    return this.serviceCar.findOneByID(id)
  }
  
  @Post()
  createCar( @Body() createCarDto: CreateCarDto ) {
    return this.serviceCar.createCar(createCarDto)
  }

  @Patch(':id')
  updateCar( 
      @Param('id', ParseUUIDPipe) id: string, 
      @Body() updateCarDto: UpdateCarDto ) {
      return this.serviceCar.updateCar(id, updateCarDto)
  }

  @Delete(':id')
  deleteCar( @Param('id', ParseUUIDPipe) id: string ) {
    return this.serviceCar.deleteCar(id);
  }
}
