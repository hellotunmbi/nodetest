import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

// Configure server
chai.use(chaiHttp);
chai.should();

describe('Students', () => {

  describe('GET all students', () => {
    it("should get all students list", (done) => {
      chai.request(server)
        .get('/students')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it("should get a single student record", (done) => {
      const id = 1;
      chai
        .request(server)
        .get(`/students/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('student');
          done();
        })
    })
  });


});