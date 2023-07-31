import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('service-topic')
  createService(@Payload() message) {
    return this.appService.createService(message.createServiceDto);
  }
}
