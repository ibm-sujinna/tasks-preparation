import { Injectable } from '@nestjs/common';
import { Service } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createService(createServiceDto: CreateServiceDto): Promise<Service> {
    const result = await this.prisma.service.create({
      data: {
        state: createServiceDto.state,
        serviceSpecificationId: createServiceDto.serviceSpecificationId,
        category: createServiceDto.category,
        description: createServiceDto.description,
        isBundle: createServiceDto.isBundle,
      },
    });
    return result;
  }
}
