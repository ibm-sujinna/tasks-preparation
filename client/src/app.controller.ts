import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Controller('service')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createService(@Body() createServiceDto: CreateServiceDto) {
    return this.appService.createService(createServiceDto);
  }
}
