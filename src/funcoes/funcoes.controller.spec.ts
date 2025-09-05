import { Test, TestingModule } from '@nestjs/testing';
import { FuncoesController } from './funcoes.controller';

describe('FuncoesController', () => {
  let controller: FuncoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuncoesController],
    }).compile();

    controller = module.get<FuncoesController>(FuncoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
