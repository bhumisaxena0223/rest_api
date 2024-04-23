import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CollectionModule } from 'src/collection/collection.module';

@Module({
  imports: [CollectionModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {
  
}
