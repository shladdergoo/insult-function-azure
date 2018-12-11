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
    degreeOfProfanity: 2,
    language: 'en',
    phrase: 'Thou artless base-court apple-john',
  },
  {
    degreeOfProfanity: 2,
    language: 'en',
    phrase: 'Ye weedy rough-hewn baggage',
  },
];

const testDataWith5 = [
  {
    degreeOfProfanity: 2,
    language: 'en',
    phrase: 'Forsooth! Thou art a pauncy rug-headed manikin',
  },
  {
    degreeOfProfanity: 3,
    language: 'en',
    phrase: 'Verily, ye be a mewling hedge-born malignancy',
  },
  {
    degreeOfProfanity: 3,
    language: 'en',
    phrase: "S'wounds thou art a lewd ill-breeding flap-dragon",
  },
  {
    degreeOfProfanity: 2,
    language: 'en',
    phrase: 'Ye mammering ill-nurtured whipster',
  },
  {
    degreeOfProfanity: 3,
    language: 'en',
    phrase: 'Thou art truly a surly clapper-clawed giglet',
  },
];

const testDataWith10 = [
  {
    degreeOfProfanity: 1,
    language: 'en',
    phrase: 'Ye vain base-court bladder',
  },
  {
    degreeOfProfanity: 2,
    language: 'en',
    phrase: 'Veriliy, ye be a dankish bat-fowling malt-worm',
  },
  {
    degreeOfProfanity: 2,
    language: 'en',
    phrase: 'Thou art a greasy eye-offending moldwarp',
  },
  {
    degreeOfProfanity: 1,
    language: 'en',
    phrase: 'Thou roynish beetle-headed barnacle',
  },
  {
    degreeOfProfanity: 3,
    language: 'en',
    phrase: 'Ye craven reeling-ripe puttock',
  },
  {
    degreeOfProfanity: 2,
    language: 'en',
    phrase: 'Verily, ye be a sottish full-gorged varlot',
  },
  {
    degreeOfProfanity: 1,
    language: 'en',
    phrase: 'Veriliy, thou art naught but a warped hasty-witted coxcomb',
  },
  {
    degreeOfProfanity: 2,
    language: 'en',
    phrase: 'Thou be a villainous swag-bellied waterfly',
  },
  {
    degreeOfProfanity: 1,
    language: 'en',
    phrase: "Thou cans't not be but a surly knotty-pated egg-shell",
  },
  {
    degreeOfProfanity: 1,
    language: 'en',
    phrase: 'Thou brazen fen-sucked bum-bailey',
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
