import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BranchController } from 'Controller/branch.controller';
import { BranchService } from 'Model/branch/branch.service';
import { Branch, BranchSchema } from './branch.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Branch.name, schema: BranchSchema }]),
  ],
  providers: [BranchService],
  controllers: [BranchController],
})
export class BranchModule {}
