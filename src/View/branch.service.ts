import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBranchDto } from 'Model/branch/branch.dto';
import { Branch, BranchDocument } from 'Model/branch/branch.schema';
import { Model } from 'mongoose';

@Injectable()
export class BranchService {
  constructor(
    @InjectModel(Branch.name) private branchModel: Model<BranchDocument>,
  ) {}

  async getAll(): Promise<Branch[]> {
    return this.branchModel.find().exec();
  }

  async getById(id: string): Promise<Branch> {
    return this.branchModel.findById(id);
  }

  async create(branchDto: CreateBranchDto): Promise<Branch> {
    const newBranch = new this.branchModel(branchDto);
    return newBranch.save();
  }
}
