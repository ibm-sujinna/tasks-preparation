import { Injectable } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { PrismaService } from 'prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaService) {}

  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'service',
        brokers: [process.env.BROKERS],
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

  createService(createServiceDto: CreateServiceDto, username: string) {
    return this.client.send('service-topic', {
      data: {
        state: createServiceDto.state,
        serviceSpecificationId: createServiceDto.serviceSpecificationId,
        category: createServiceDto.category,
        description: createServiceDto.description,
        isBundle: createServiceDto.isBundle,
        createdBy: username,
      },
    });
  }

  async getStatus(id: string) {
    const result = await this.prisma.service.findFirstOrThrow({
      where: { id },
    });
    return { status: result.status };
  }
}
