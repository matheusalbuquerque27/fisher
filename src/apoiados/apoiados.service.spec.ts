import { Test, TestingModule } from '@nestjs/testing';
import { ApoiadosService } from './apoiados.service';

describe('ApoiadosService', () => {
  let service: ApoiadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApoiadosService],
    }).compile();

    service = module.get<ApoiadosService>(ApoiadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
