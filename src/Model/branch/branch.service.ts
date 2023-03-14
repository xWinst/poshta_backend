import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';
import { CreateBranchDto } from 'Model/branch/branch.dto';
import { Branch, BranchDocument } from 'Model/branch/branch.schema';

axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';

@Injectable()
export class BranchService {
  constructor(
    @InjectModel(Branch.name) private branchModel: Model<BranchDocument>,
  ) {}

  async getAllByCity(method): Promise<BranchDocument[] | CreateBranchDto[]> {
    const { CityName } = method;
    const list = await this.branchModel.find({ city: CityName }).exec();

    if (list.length === 0) {
      const data = await this.getData(method);
      return this.saveBranchesToDatabase(data, true);
    }

    return list;
  }

  async getById(id: string): Promise<BranchDocument[] | CreateBranchDto[]> {
    const branch = await this.branchModel.findOne({ id }).exec();
    if (!branch) {
      const data = await this.getData({ Ref: id });
      return this.saveBranchesToDatabase(data, false);
    }

    return [branch];
  }

  async getData(methodProperties: { CityName?: string; Ref?: string }) {
    const { data } = await axios.post('', {
      apiKey: process.env.API_KEY,
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties,
    });

    return data.data;
  }

  async create(branchDto: CreateBranchDto): Promise<void> {
    this.branchModel.create(branchDto);
  }

  saveBranchesToDatabase(dataList: any, isShow: boolean): CreateBranchDto[] {
    const branchList: CreateBranchDto[] = [];
    if (dataList.length > 0) {
      dataList.forEach((branch: any) => {
        const { Width, Height, Length } = branch.SendingLimitationsOnDimensions;
        const createdBranch: CreateBranchDto = {
          id: branch.Ref,
          city: branch.CityDescription,
          name: branch.Description,
          adress: branch.ShortAddress,
          type: branch.TypeOfWarehouse,
          phone: branch.Phone,
          maxWeight: Number(branch.PlaceMaxWeightAllowed),
          maxDimensions: `${Width} x ${Height} x ${Length}`,
          longitude: Number(branch.Longitude),
          latitude: Number(branch.Latitude),
          hasPostFinance: branch.PostFinance === '1',
          hasBicycleParking: branch.BicycleParking === '1',
          hasPOSTerminal: branch.POSTerminal === '1',
          hasInternational: branch.InternationalShipping === '1',
          hasSelfWorkplaces: branch.SelfServiceWorkplacesCount === '1',
          canGetMoneyTransfer: branch.CanGetMoneyTransfer === '1',
          hasGeneratorEnabled: branch.GeneratorEnabled === '1',
          schedule: branch.Schedule,
          isShow,
        };

        this.create(createdBranch);
        branchList.push(createdBranch);
      });
    }
    return branchList;
  }
}
