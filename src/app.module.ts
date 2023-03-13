import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { BranchModule } from 'Model/branch/branch.module';
import { TTNModule } from 'Model/ttn/ttm.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_HOST),
    BranchModule,
    TTNModule,
  ],
})
export class AppModule {}
