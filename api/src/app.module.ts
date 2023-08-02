import { Module } from '@nestjs/common';
import { ServiceModule } from './service/service.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from './config.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      validationSchema: configValidationSchema,
    }),
    ServiceModule,
    AuthModule,
  ],
})
export class AppModule {}
