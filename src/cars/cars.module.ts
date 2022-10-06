import { Module } from '@nestjs/common';
// Los controlers escucha las solicitudes del cliente (front o postman)
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
