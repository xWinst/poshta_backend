import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { TTNService } from 'Model/ttn/ttn.service';

@Controller('ttn')
export class TTNController {
  constructor(private ttnService: TTNService) {}

  @Get(':id')
  async getById(@Param('id') id: string, @Res() res: Response) {
    const result = await this.ttnService.getById(id);
    return res.send(result);
  }
}
