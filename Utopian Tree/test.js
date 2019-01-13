var expect = require("chai").expect;
// var should = require("chai").should();
var {mainFunction} = require("./index");



describe("Test of Utopian Tree", function () {

	it("should return 3",function(){
		var input=0;
		expect(mainFunction(input)).to.equal(1);
	});

	it("should return 5",function(){
		var input=1;
		expect(mainFunction(input)).to.equal(2);
	});

	it("should return 7",function(){
		var input=4;
		expect(mainFunction(input)).to.equal(7);
	});

	it("should return 6",function(){
		var input=3;
		expect(mainFunction(input)).to.equal(6);
	});
});