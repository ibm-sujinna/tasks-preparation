import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createService(data): Promise<string> {
    const result = await this.prisma.service.create({ data });
    return result.status;
  }
}
