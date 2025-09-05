import { Test, TestingModule } from '@nestjs/testing';
import { FuncoesService } from './funcoes.service';

describe('FuncoesService', () => {
  let service: FuncoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FuncoesService],
    }).compile();

    service = module.get<FuncoesService>(FuncoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
