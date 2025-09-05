import { Test, TestingModule } from '@nestjs/testing';
import { ColaboradoresService } from './colaboradores.service';

describe('ColaboradoresService', () => {
  let service: ColaboradoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColaboradoresService],
    }).compile();

    service = module.get<ColaboradoresService>(ColaboradoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
