import { Module } from '@nestjs/common';
import { ServiceModule } from './service/service.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ServiceModule, AuthModule],
})
export class AppModule {}
