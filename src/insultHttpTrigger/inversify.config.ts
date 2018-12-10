import { Container } from 'inversify';

import IInsultRepository from './interface/iinsultrepository';
import IInsultService from './interface/iinsultservice';

import InsultRepository from './repository/insultrepository';

import InsultService from './service/insultservice';

import Types from './types';

const container = new Container();

container.bind<IInsultRepository>(Types.IInsultRepository).to(InsultRepository);
container.bind<IInsultService>(Types.IInsultService).to(InsultService);

export default container;
