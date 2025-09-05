import { Test, TestingModule } from '@nestjs/testing';
import { OrganizacoesService } from './organizacoes.service';

describe('OrganizacoesService', () => {
  let service: OrganizacoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganizacoesService],
    }).compile();

    service = module.get<OrganizacoesService>(OrganizacoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
