"use strict";

function mainFunction(max_jump,height) {
	let max_hurdle = Math.max(...height);
	return (max_jump > max_hurdle) ? 0 : max_hurdle - max_jump;
}

var max_jump=4;
var height=[2, 5, 4, 5 ,2];
mainFunction(max_jump,height);


module.exports={
	mainFunction: mainFunction
};