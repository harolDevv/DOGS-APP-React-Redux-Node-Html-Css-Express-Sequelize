const {Temperamento, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Temperament Model', () => {
  before(() => conn.authenticate());
  describe('Validators', () => {
    beforeEach(() => Temperamento.sync({ force: true }));
    describe('Temperament', () => {
      it('temperament name', () => {
        Temperamento.create({ name: 'playFull' });
      });
    });
  });
});
