import { Test, TestingModule } from '@nestjs/testing';
import { OrganizacoesController } from './organizacoes.controller';

describe('OrganizacoesController', () => {
  let controller: OrganizacoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizacoesController],
    }).compile();

    controller = module.get<OrganizacoesController>(OrganizacoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
