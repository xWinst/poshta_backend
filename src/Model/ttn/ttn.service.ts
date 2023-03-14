import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTTNDto, UpdateTTNDto } from 'Model/ttn/ttn.dto';
import { TTN, TTNDocument } from 'Model/ttn/ttn.schema';
import { Model } from 'mongoose';

@Injectable()
export class TTNService {
  constructor(@InjectModel(TTN.name) private TTNModel: Model<TTNDocument>) {}

  async getById(id: string): Promise<TTN> {
    return this.TTNModel.findById(id);
  }

  async create(TTNDto: CreateTTNDto): Promise<TTN> {
    const newTTN = new this.TTNModel(TTNDto);
    return newTTN.save();
  }

  async update(id: string, TTNDto: UpdateTTNDto): Promise<TTN> {
    return this.TTNModel.findByIdAndUpdate(id, TTNDto, { new: true });
  }
}
