function bigSorting(unsorted) {
	return unsorted.sort(function (a, b) {
		return a - b;
	});
}


var input = [8, 1, 2, 100, 12303479849857341718340192371, 3084193741082937, 3084193741082938, 111, 200];
console.log(bigSorting(input));