import { Module } from '@nestjs/common';
import { EdgeDBProvider } from './provider.const';

@Module({
  providers: [EdgeDBProvider],
  exports: [EdgeDBProvider],
})
export class EdgeDBModule {}
