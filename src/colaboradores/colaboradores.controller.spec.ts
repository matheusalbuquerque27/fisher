import { Test, TestingModule } from '@nestjs/testing';
import { ColaboradoresController } from './colaboradores.controller';

describe('ColaboradoresController', () => {
  let controller: ColaboradoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColaboradoresController],
    }).compile();

    controller = module.get<ColaboradoresController>(ColaboradoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
