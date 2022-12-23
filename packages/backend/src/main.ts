import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { GrpcServerOptions } from './grpc.options';

import { ApplicationModule } from './modules/Application/module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ApplicationModule,
    GrpcServerOptions
  );
  await app.listen();

  Logger.log(`🚀 Application is running on: ${GrpcServerOptions.options.url}`);
}

bootstrap();
