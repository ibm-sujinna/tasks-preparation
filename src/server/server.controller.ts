import { Controller } from '@nestjs/common';
import { ServerService } from './server.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @MessagePattern('service-topic')
  createService(@Payload() message) {
    return this.serverService.createService(message.value.createServiceDto);
  }
}
