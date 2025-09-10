import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { OrganizacoesModule } from './organizacoes/organizacoes.module';
import { FuncoesModule } from './funcoes/funcoes.module';
import { ApoiadosModule } from './apoiados/apoiados.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [

     ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASS'),
        database: config.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true, // ⚠️ apenas em dev!
      }),
    }),
    ColaboradoresModule,
    OrganizacoesModule,
    FuncoesModule,
    ApoiadosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}