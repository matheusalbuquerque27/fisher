import { Test, TestingModule } from '@nestjs/testing';
import { ApoiadosController } from './apoiados.controller';

describe('ApoiadosController', () => {
  let controller: ApoiadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApoiadosController],
    }).compile();

    controller = module.get<ApoiadosController>(ApoiadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
