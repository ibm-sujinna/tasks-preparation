import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('service-topic')
  async createService(@Payload() message): Promise<string> {
    return await this.appService.createService(message.data);
  }
}
