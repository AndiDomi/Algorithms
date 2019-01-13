function formingMagicSquare(s) {
	var result=0;
	var total=0;
	var total2=0;
	var total3=0;
	for (let index = 0; index < s.length; index++) {
		for (let index2 = 0; index2 < s.length; index2++) {
			total += s[index][index2];
			var index3=index2-3;
			total2 += s[index2][index];
			if(index2==index || index3==index2){
				console.log(index+" "+index2);
				total3+=s[index][index];
			}
		}

		console.log("total "+ total);
		var total=0;
		console.log("total2 "+ total2);
		var total2=0;
		console.log("total3 "+ total3);
		var total3=0;
	}
	return result;

}

var input=[
	[5 ,3 ,4],
	[1 ,5 ,8],
	[6 ,4 ,2]
];
console.log(formingMagicSquare(input));