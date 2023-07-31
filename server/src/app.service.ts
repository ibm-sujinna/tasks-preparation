import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createService(createServiceDto: CreateServiceDto): Promise<string> {
    const result = await this.prisma.service.create({
      data: {
        state: createServiceDto.state,
        serviceSpecificationId: createServiceDto.serviceSpecificationId,
        category: createServiceDto.category,
        description: createServiceDto.description,
        isBundle: createServiceDto.isBundle,
      },
    });
    return result.status;
  }
}
