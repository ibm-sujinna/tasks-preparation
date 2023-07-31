import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Controller('service')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createService(@Body() createServiceDto: CreateServiceDto) {
    return this.appService.createService(createServiceDto);
  }

  @Get('/:id')
  async getStatus(@Param('id') id: string): Promise<string> {
    return this.appService.getStatus(id);
  }
}
