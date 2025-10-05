import z from 'zod';

export const envSchema = z.object({
  PORT: z.coerce.number().min(3000).max(65535).int(),
  DATABASE_URL: z.url(),
  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES: z.coerce.number()
});

export type EnvConfig = z.infer<typeof envSchema>;
