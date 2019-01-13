var expect = require("chai").expect;
// var should = require("chai").should();
var {mainFunction} = require("./index");



describe("Test of index.js", function () {

	it("should return 3",function(){
		var max_jump=4;
		var height=[1 ,6 ,3 ,5 ,2];
		expect(mainFunction(max_jump, height)).to.equal(2);
	});

	it("should return 0",function(){
		var max_jump=7;
		var height=[2, 5, 4, 5 ,2];
		expect(mainFunction(max_jump, height)).to.equal(0);
	});

});