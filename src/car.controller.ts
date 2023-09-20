// src/car.controller.ts

import { Controller, Get } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get('carlist')
  async getCarList(): Promise<any> {
    try {
      const carData = await this.carService.getCarList();
      return carData;
    } catch (error) {
      throw new Error(
        'Araç listesini alma işlemi başarısız oldu: ' + error.message,
      );
    }
  }
}
