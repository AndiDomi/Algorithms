
function getTotalX(a,b){

    var factors_first=[];
    var count={};
    var count2={};
    var number_of_x=0;
    
    
    // first we try to find X'es (indexes) that are factors of the smallest number in the b array
    for (let index = 0; index <= Math.min(...b); index++) {
        if(Math.min(...b) % index == 0){
            factors_first.push(index);
            count[index]=0;
            count2[index]=0;
        }
    };
    
    //  we use this X'es to find if they can be % by numbers of array a
    // mark each time they can be %
    for (const key in count) {
        for (const iterator of a) {
            if(key % iterator ==0){
                count[key]+=1;
            }
        }
    };
    
    //  we use this X'es to find if numbers of array b can be % by the X'es
    // mark each time they can be %
    for (const iterator of b) {
        for (const key in count) {
           if(iterator % key ==0){
            count2[key]+=1;
          }
        }
    }
    
    // count those indexes that has counters as the length of each array
     
    for (const key in count) {
        if(count[key]==a.length && count2[key]==b.length){
            number_of_x++;
        }
    }
        console.log(number_of_x);
    }
    
var a= [2,4];
var d= [16,32,96];

getTotalX(a,d);
    