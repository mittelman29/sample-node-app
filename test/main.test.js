var app = require('../index');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Test Routes', () => {
    describe('Success', () => {
        // GET /
        it('should return 200 when hitting the root route with GET', () => {
            chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res.statusCode).to.be.equal(200);
                expect(res.text).to.be.equal('Summary Controller');
            });
        });

        // GET /:id
        it('should return 200 when hitting the root route with GET', () => {
            chai.request(app)
            .get('/4')
            .end((err, res) => {
                expect(res.statusCode).to.be.equal(200);
                expect(res.text).to.be.equal('Detail Controller: 4');
            });
        });

        // POST /create
        it('should return 200 when hitting the root route with GET', () => {
            chai.request(app)
            .post('/')
            .end((err, res) => {
                expect(res.statusCode).to.be.equal(200);
                expect(res.text).to.be.equal('Create Controller');
            });
        });
        
        // DELETE /create
        it('should return 200 when hitting the root route with GET', () => {
            chai.request(app)
            .delete('/5')
            .end((err, res) => {
                expect(res.statusCode).to.be.equal(200);
                expect(res.text).to.be.equal('Delete Controller: 5');
            });
        });
        
    });

});
