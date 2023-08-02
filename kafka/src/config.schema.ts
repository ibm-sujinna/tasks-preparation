import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
  DATABASE_URL: Joi.string().required(),
  BROKERS: Joi.string().required(),
});
