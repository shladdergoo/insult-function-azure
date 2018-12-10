import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import * as shuffle from 'shuffle-array';

import IInsultRepository from '../interface/iinsultrepository';
import IInsultService from '../interface/iinsultservice';
import Types from '../types';

@injectable()
class InsultService implements IInsultService {
  private _insultRepository: IInsultRepository;

  constructor(
    @inject(Types.IInsultRepository) insultRepository: IInsultRepository
  ) {
    this._insultRepository = insultRepository;
  }

  public GetInsults() {
    const allInsults = this._insultRepository.GetInsults();

    return shuffle(allInsults).slice(0, 5);
  }
}

export default InsultService;
