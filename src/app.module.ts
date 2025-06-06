import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '78110',
    database: 'login_app_db',
    autoLoadEntities: true,
    synchronize: true
  }),
  UsersModule,
  AuthModule,
  ] 
})
export class AppModule {}
