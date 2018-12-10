import Insult from '../model/insult';

interface IInsultRepository {
  GetInsults(): Insult[];
}

export default IInsultRepository;
