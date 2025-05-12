import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '78110',
    database: '',
    autoLoadEntities: true,
    synchronize: true
  }),
  UsersModule,
  AuthModule,
  ]
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
