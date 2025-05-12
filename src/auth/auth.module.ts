import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';


@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'jwt_secret_key', //cambiarlo en producción
      signOptions: { expiresIn: '1h' }, // 1 hour
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
