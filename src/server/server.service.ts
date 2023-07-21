import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateServiceDto } from 'src/services/dto/create-service.dto';
import { Service } from '@prisma/client';

@Injectable()
export class ServerService {
  constructor(private prisma: PrismaService) {}

  async createService(createServiceDto: CreateServiceDto): Promise<Service> {
    const result = await this.prisma.service.create({ data: createServiceDto });
    return result;
  }
}
