import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createService(data) {
    const result = await this.prisma.service.create({ data });
    return { status: result.status };
  }
}
