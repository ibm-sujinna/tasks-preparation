import { Module } from '@nestjs/common';
import { ServiceModule } from './service/service.module';
import { ServerModule } from './server/server.module';

@Module({
  imports: [ServiceModule, ServerModule],
})
export class AppModule {}
