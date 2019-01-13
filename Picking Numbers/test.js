var expect = require('chai').expect;
var should = require('chai').should();
var {mainFunction} = require('./index');



describe('Test of index.js', function () {

    it('should return 3',function(){
        var input=[4,6,5,3,3,1];
        expect(mainFunction(input)).to.equal(3);
    });

    it('should return 5',function(){
        var input=[1 ,2 ,2 ,3 ,1 ,2];
        expect(mainFunction(input)).to.equal(5);
    });

});