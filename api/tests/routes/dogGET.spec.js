
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
let should = chai.should();
const app = require('../../src/app.js');

chai.use(chaiHttp);


    describe(`get all dogs`, () => {
        it('obtiene el listado de las razas', (done) => { 
            chai.request(app)
            .get('/dogs')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();                               
            });
        });
    })
