import 'reflect-metadata';

import container from './inversify.config';

import IInsultService from './interface/iinsultservice';
import Types from './types';

export const index = (context: any, req: any) => {
  const insultService = container.get<IInsultService>(Types.IInsultService);
  const insults = insultService.GetInsults();

  context.res = {
    body: insults,
  };
  context.done();
};
