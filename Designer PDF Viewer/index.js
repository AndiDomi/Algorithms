"use strict";

function mainFunction(char_height,word) {
	var result=0;
	var start_ascii=97;
	var end_ascii=122;
	var alphabet= new Map;
	var tallest_char=0;

	// create alphabet 
	// link char height to char in the alphabet thanks to a map
	for (let index = start_ascii, index_char_height=0; index < end_ascii+1; index++,index_char_height++) {
		const  char_from_int=String.fromCharCode(index);
		// console.log(char_from_int);
		const heigt_char = char_height[index_char_height];
		// console.log(heigt_char);
		alphabet.set(char_from_int,heigt_char);
	}

	// for each char in word store max height
	// calculate mm^2
	for (const iterator of word) {
		var height=alphabet.get(iterator);
		if(tallest_char < height) tallest_char = height ;
	}

	result=word.length*tallest_char;

	return result;
}


var input=[1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
mainFunction(input,"abc");


module.exports={
	mainFunction: mainFunction
};