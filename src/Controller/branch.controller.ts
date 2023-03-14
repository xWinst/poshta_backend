import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { BranchService } from 'Model/branch/branch.service';

@Controller('branch')
export class BranchController {
  constructor(private branchService: BranchService) {}

  @Get()
  async getAllByCity(@Req() req: Request, @Res() res: Response) {
    const result = await this.branchService.getAllByCity(req.query);
    return res.send(result);
  }

  @Get(':id')
  async getById(@Param('id') id: string, @Res() res: Response) {
    const result = await this.branchService.getById(id);
    return res.send(result);
  }
}
