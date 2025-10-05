import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { EnvConfig } from 'src/config/env.schema';

@Injectable()
export class ConfigService {
  constructor(
    private readonly nestConfigService: NestConfigService<EnvConfig, true>
  ) {}

  get<K extends keyof EnvConfig>(key: K): EnvConfig[K] {
    return this.nestConfigService.get(key, { infer: true });
  }
}
