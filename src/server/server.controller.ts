import { Controller } from '@nestjs/common';
import { ServerService } from './server.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateServiceDto } from 'src/services/dto/create-service.dto';

@Controller()
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @MessagePattern('service-topic')
  createService(@Payload() createServiceDto: CreateServiceDto) {
    return this.serverService.createService(createServiceDto);
  }
}
