"use strict"

function mainFunction(input) {
    var smallerArray=new Map;
    var single_nr_array=new Array;
    var max_sum=0;
    var max_temp=0;
    var max_duplicate=0;

    // sort array ascending
    input.sort((a, b)=>{return b - a});

    // write how many times a number repeats in the array to the map
    for (const iterator of input) {
        if(smallerArray.has(iterator)){ // O(1)
            smallerArray.set(iterator,smallerArray.get(iterator)+1); // O(1)
        }else{
            smallerArray.set(iterator,1);
        }
        
    }

    // add the map values to an array
    for (const key of smallerArray) {
        single_nr_array.push(key[0]);
    };

    // find if the consequitive numbers sum is bigger than the past one
    var s_length=single_nr_array.length-1;
    for (let index = 0 ; index < s_length; index++) {
        if(single_nr_array[index+1] - single_nr_array[index] == -1){
            max_temp=smallerArray.get(single_nr_array[index])+smallerArray.get(single_nr_array[index+1])
        };
        if(max_sum<max_temp){
            max_sum=max_temp;
        };
    };

    // and if a single number duplicate is bigger than the consequitive sum
    for (const iterator of smallerArray) {
        if(max_duplicate < iterator[1]){
            max_duplicate=iterator[1];
        };
    };

    // return the biggest of the two
    if(max_sum > max_duplicate){
        return max_sum;
    }else{
        return max_duplicate;
    };

}
var input=[4,4,6,5,3,3,1];
mainFunction(input);

module.exports={
    mainFunction: mainFunction
}