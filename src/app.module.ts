import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { OrganizacoesModule } from './organizacoes/organizacoes.module';
import { FuncoesModule } from './funcoes/funcoes.module';
import { ApoiadosModule } from './apoiados/apoiados.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
      database: process.env.DB_NAME || 'fisher_db',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ só em desenvolvimento!
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