import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { BranchModule } from 'Model/branch/branch.module';
// import { TtnController } from 'ttn/ttn.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_HOST),
    BranchModule,
  ],
})
export class AppModule {}
