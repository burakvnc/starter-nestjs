// src/app.module.ts

import { Module } from '@nestjs/common';
import { CarController } from './car.controller'; // CarController'ı içe aktarın
import { CarService } from './car.service'; // CarService'i içe aktarın
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://ovence29:burak123@reactnative.tjjnygb.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [CarController,AppController], 
  providers: [CarService,AppService], 
})
export class AppModule {}
