
"use strict";

function mainFunction(input) {

	var result=0;    
	for (let index = 0; index <= input; index++) {

		if(index%2===0 && index!==0){
			result*= 2;
			console.log(result);
		}else{
			result++;
			console.log(result);
		}
		// (index%2===0 && index!==0) ? result*= 2 :result++;
	}

	return result;
}

var input=4;
console.log(mainFunction(input));


module.exports={
	mainFunction: mainFunction
};