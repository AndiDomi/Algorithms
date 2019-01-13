
// // var q = [1, 2, 5, 3, 4, 7, 8, 6 ];
// // var q = [1, 2, 5, 3, 7, 8, 6, 4];
//  var q = [1, 2, 5, 3, 7, 8, 6, 4];
// // var q = [2, 5, 1, 3, 4];
// // var q = [2, 1, 5, 3, 4];

// function minimumBribes(array) {
// // start to looping in the array
// var counter=0;
// console.log(array.length)
// for (let index = 1; index <= array.length; index++) {
//     console.log("index of "+ index +" is "+(array.indexOf(index)+1));
//     // if(index-(array.indexOf(index)+1)>2 ||index-(array.indexOf(index)+1)<-2 ){
//     //     console.log("Too chaotic");
//         console.log(Math.abs(index - (array.indexOf(index)+1)));
//     // }else{
//     counter += Math.abs(index-(array.indexOf(index)+1));
//     // }
//     // console.log(index-array.indexOf(index)+1);
// }
// console.log("( "+counter+" )");
// // console.log(counter);
// // check if the index moved +-1

// // if yes +++

// // else too caotic!

// }
// minimumBribes(q);
