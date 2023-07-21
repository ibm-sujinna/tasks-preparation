import { Body, Controller, Post } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Controller('service')
export class ServicesController {
  constructor(private readonly ServicesService: ServicesService) {}

  @Post()
  createService(@Body() createServiceDto: CreateServiceDto) {
    return this.ServicesService.createService(createServiceDto);
  }
}
