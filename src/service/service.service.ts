import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Injectable()
export class ServiceService {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'service',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'service-consumer',
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf('service-topic');
    await this.client.connect();
  }

  createService(createServiceDto: CreateServiceDto) {
    return this.client.send('service-topic', {
      createServiceDto: createServiceDto,
    });
  }
}
