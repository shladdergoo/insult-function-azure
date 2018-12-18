import 'reflect-metadata';

import container from './inversify.config';

import { IInsultService, Types } from 'node-insult';

export const index = (context: any, req: any) => {
  const versionKey = 'Version';
  const version = process.env[versionKey];
  context.log(
    `insultHttpTrigger (${version}) processed a request. RequestUri=${
      req.originalUrl
    }`
  );
  context.log(`Request Headers = ${JSON.stringify(req.headers)}`);
  context.log(`Request Body = ${JSON.stringify(req.body)}`);

  const insultService = container.get<IInsultService>(Types.IInsultService);
  const insults = insultService.GetInsults();

  context.res = {
    body: insults,
  };
  context.done();
};
