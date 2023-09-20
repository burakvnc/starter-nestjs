// src/car.service.ts

import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';

@Injectable()
export class CarService {
  async getCarList(): Promise<any> {
    try {
      const carData = await fs.readFile('src/cars.json', 'utf8');
      return JSON.parse(carData);
    } catch (error) {
      throw new Error('JSON dosyasını okurken bir hata oluştu: ' + error.message);
    }
  }
}
