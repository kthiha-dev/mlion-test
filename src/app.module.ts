import { Module } from '@nestjs/common';
import { DimensionsModule } from './dimensions/dimensions.module';
import { DimensionsService } from './dimensions/dimensions.service';

@Module({
  imports: [DimensionsModule],
  providers: [DimensionsService],
})
export class AppModule {}
