import 'reflect-metadata';

import container from './inversify.config';

import IInsultService from './interface/iinsultservice';
import Types from './types';

export const index = (context: any, req: any) => {
  context.log(
    `insultHttpTrigger function processed a request. RequestUri=${
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
