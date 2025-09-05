import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API Fisher')
    .setDescription('Documentação da API do Fisher, sistema de gestão para organizações missionárias e sociais')
    .setVersion('1.0')
    .addTag('colaboradores')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Rota: http://localhost:3000/api

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
