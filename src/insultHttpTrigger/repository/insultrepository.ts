import { injectable } from 'inversify';
import 'reflect-metadata';

import IInsultRepository from '../interface/iinsultrepository';
import Insult from '../model/insult';

/* tslint:disable:no-var-requires */
const insults = require('../data');

@injectable()
class InsultRepository implements IInsultRepository {
  public GetInsults(): Insult[] {
    return insults;
  }
}

export default InsultRepository;
