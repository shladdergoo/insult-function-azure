import { Container } from 'inversify';

import {
  IInsultRepository,
  IInsultService,
  InsultRepository,
  InsultService,
  Types,
} from 'node-insult';

const container = new Container();

container.bind<IInsultRepository>(Types.IInsultRepository).to(InsultRepository);
container.bind<IInsultService>(Types.IInsultService).to(InsultService);

export default container;
