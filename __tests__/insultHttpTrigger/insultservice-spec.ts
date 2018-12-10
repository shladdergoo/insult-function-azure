import 'mocha';
import 'mocha-sinon';
import * as chai from 'chai';
import * as sinon from 'sinon';

import IInsultRepository from '../../src/insultHttpTrigger/interface/iinsultrepository';
import IInsultService from '../../src/insultHttpTrigger/interface/iinsultservice';
import InsultService from '../../src/insultHttpTrigger/service/insultservice';

const expect = chai.expect;

const testDataWith2 = [
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'foo',
  },
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'bar',
  },
];

const testDataWith5 = [
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'foo',
  },
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'bar',
  },
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'bundy',
  },
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'this',
  },
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'really',
  },
];

const testDataWith10 = [
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'foo',
  },
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'bar',
  },
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'bundy',
  },
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'this',
  },
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'really',
  },
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'is',
  },
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'tedious',
  },
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'oh',
  },
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'yes',
  },
  {
    degreeOfProfanity: 1,
    language: 'en-GB',
    phrase: 'indeed',
  },
];

describe('InsultService', () => {
  let repositoryMock: IInsultRepository = <IInsultRepository>{};

  describe('GetInsults', () => {
    it('should call InsultRepository', () => {
      repositoryMock.GetInsults = sinon.stub().returns(testDataWith2);

      let sut: InsultService = new InsultService(repositoryMock);

      sut.GetInsults();

      expect((<sinon.SinonStub>repositoryMock.GetInsults).calledOnce).to.be
        .true;
    });

    it('should return all results when it finds fewer than 5', () => {
      repositoryMock.GetInsults = sinon.stub().returns(testDataWith2);

      let sut: IInsultService = new InsultService(repositoryMock);

      expect(sut.GetInsults()).to.be.not.null;
      expect(sut.GetInsults().length).to.equal(testDataWith2.length);
    });

    it('should return all results when it finds exactly 5', () => {
      repositoryMock.GetInsults = sinon.stub().returns(testDataWith5);

      let sut: IInsultService = new InsultService(repositoryMock);

      expect(sut.GetInsults()).to.be.not.null;
      expect(sut.GetInsults().length).to.equal(testDataWith5.length);
    });

    it('should return only 5 results when it finds more than 5', () => {
      repositoryMock.GetInsults = sinon.stub().returns(testDataWith10);

      let sut: IInsultService = new InsultService(repositoryMock);

      expect(sut.GetInsults()).to.be.not.null;
      expect(sut.GetInsults().length).to.equal(5);
    });

    it("should return empty array when it doesn't find insults", () => {
      repositoryMock.GetInsults = sinon.stub().returns([]);

      let sut: IInsultService = new InsultService(repositoryMock);

      expect(sut.GetInsults()).to.be.not.null;
      expect(sut.GetInsults().length).to.equal(0);
    });
  });
});
