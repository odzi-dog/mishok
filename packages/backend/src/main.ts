import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { environment } from './environments/environment';

import { ApplicationModule } from './modules/Application/module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  
  // Application settings
  app.setGlobalPrefix(environment.globalPrefix);
  
  const port = process.env.PORT || 3333;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${environment.globalPrefix}`
  );
}

bootstrap();
