import { envSchema } from 'src/config/env.schema';
import z from 'zod';

export function validate(config: Record<string, any>) {
  const { data, success, error } = envSchema.safeParse(config);
  if (!success) {
    throw new Error(`Env validation error \n${z.prettifyError(error)}`);
  }
  return data;
}
