import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from '@prisma/client';

@Controller('service')
@UseGuards(AuthGuard())
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  createService(
    @Body() createServiceDto: CreateServiceDto,
    @GetUser() user: User,
  ) {
    return this.serviceService.createService(createServiceDto, user.username);
  }

  @Get('/:id')
  async getStatus(@Param('id') id: string) {
    return this.serviceService.getStatus(id);
  }
}
