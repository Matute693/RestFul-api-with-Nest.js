import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { FlavorsController } from './flavors/flavors.controller';
import { FlavorsModule } from './flavors/flavors.module';

@Module({
  imports: [CarsModule, FlavorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
