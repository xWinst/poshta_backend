import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';
import { CreateTTNDto } from 'Model/ttn/ttn.dto';
import { TTN, TTNDocument } from 'Model/ttn/ttn.schema';

const finalStatuses = ['9', ' 10', '11', '102', '103', '105', '106'];

@Injectable()
export class TTNService {
  constructor(@InjectModel(TTN.name) private TTNModel: Model<TTNDocument>) {}

  async getById(id: string): Promise<TTNDocument | CreateTTNDto> {
    const ttn = await this.TTNModel.findOne({ id });

    if (!ttn || !finalStatuses.includes(ttn.status)) {
      const { data } = await axios.post('', {
        apiKey: process.env.API_KEY,
        modelName: 'TrackingDocument',
        calledMethod: 'getStatusDocuments',
        methodProperties: {
          Documents: [{ DocumentNumber: id }],
        },
      });

      if (data.data[0].StatusCode === '3') {
        return null;
      }

      const newTTN = this.createTTNDto(data.data[0]);

      if (!ttn) this.create(newTTN);
      else this.update(ttn._id.toString(), newTTN);

      return newTTN;
    }

    return ttn;
  }

  async create(TTNDto: CreateTTNDto): Promise<void> {
    this.TTNModel.create(TTNDto);
  }

  async update(id: string, TTNDto: CreateTTNDto): Promise<void> {
    this.TTNModel.findByIdAndUpdate(id, TTNDto);
  }

  createTTNDto(ttnData: any): CreateTTNDto {
    const {
      Number,
      Status,
      RecipientDateTime,
      ScheduledDeliveryDate,
      CityRecipient,
      CitySender,
      DateCreated,
      ActualDeliveryDate,
      WarehouseSender,
      WarehouseRecipient,
      WarehouseSenderInternetAddressRef,
      WarehouseRecipientInternetAddressRef,
    } = ttnData;

    const result: CreateTTNDto = {
      id: Number,
      status: Status,
      receivedDate: RecipientDateTime,
      deliveryDate: ScheduledDeliveryDate,
      recipientCity: CityRecipient,
      senderCity: CitySender,
      dispatchDate: DateCreated,
      isParcelDelivered: !!ActualDeliveryDate,
      senderBranch: WarehouseSender,
      recipientBranch: WarehouseRecipient,
      senderBranchId: WarehouseSenderInternetAddressRef,
      recipientBranchId: WarehouseRecipientInternetAddressRef,
    };

    return result;
  }
}
