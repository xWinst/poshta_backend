import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { BranchService } from 'View/branch.service';
import { CreateBranchDto } from 'Model/branch/branch.dto';

@Controller('branch')
export class BranchController {
  constructor(private branchService: BranchService) {}
  @Get()
  getAll() {
    return this.branchService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.branchService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createBranchDto: CreateBranchDto) {
    return this.branchService.create(createBranchDto);
  }
}
