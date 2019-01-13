var expect = require("chai").expect;
// var should = require("chai").should();
var {mainFunction} = require("./index");



describe("Test of index.js", function () {

	it("should return 9",function(){
		var h=[1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
		var word="abc";
		expect(mainFunction(h,word)).to.equal(9);
	});

	it("should return 5",function(){
		var h=[1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
		var word="zaba";
		expect(mainFunction(h,word)).to.equal(28);
	});

});