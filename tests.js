var chai = require('chai');
var testCase = require('mocha').describe;
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);


/*
testing https://jsonplaceholder.typicode.com
JSONPlaceholder is a free online REST service that you can use whenever you need some fake data.
You can refer to the website for the API documentation and examples.
*/

testCase('https://jsonplaceholder.typicode.com', function(){
      it('it should GET the post ', (done) => {
        chai.request('https://jsonplaceholder.typicode.com')
            .get('/posts?userId=1&title=dolorem dolore est ipsam')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body[0].should.be.a('object');
                res.body[0].should.be.property('userId').equal(1);
                res.body[0].should.be.property('title').equal('dolorem dolore est ipsam');
                res.body[0].should.be.property('id').equal(8);
                res.body[0].should.be.property('body').equal('dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae');
                done();
            });
      }).timeout(500);
  }); 

  testCase('https://jsonplaceholder.typicode.com', function(){
    it('it should GET empty array', (done) => {
      chai.request('https://jsonplaceholder.typicode.com')
          .get('/posts?userId=&title=')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(0);
              done();
          });
    }).timeout(500);
}); 