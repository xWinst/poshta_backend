import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TTNService } from 'View/ttn.service';
import { CreateTTNDto, UpdateTTNDto } from 'Model/ttn/ttn.dto';

@Controller('ttn')
export class TTNController {
  constructor(private ttnService: TTNService) {}

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.ttnService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTTNDto: CreateTTNDto) {
    return this.ttnService.create(createTTNDto);
  }

  @Patch()
  update(@Body() updateTTNDto: UpdateTTNDto, @Param('id') id: string) {
    return this.ttnService.update(id, updateTTNDto);
  }
}
