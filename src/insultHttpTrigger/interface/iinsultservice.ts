import Insult from '../model/insult';

interface IInsultService {
  GetInsults(): Insult[];
}

export default IInsultService;
