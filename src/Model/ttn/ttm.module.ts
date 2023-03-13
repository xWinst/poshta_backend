import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TTNController } from 'Controller/ttn.controller';
import { TTNService } from 'View/ttn.service';
import { TTN, TTNSchema } from './ttn.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: TTN.name, schema: TTNSchema }])],
  providers: [TTNService],
  controllers: [TTNController],
})
export class TTNModule {}
