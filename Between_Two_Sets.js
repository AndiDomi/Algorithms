
function andi(a,b){

    var factors_first=[];
    var count={};
    var count2={};
    var number_of_x=0;
    
    
    // first we try to find X that are factors of the smallest number in the b array
    for (let index = 0; index <= Math.min(...b); index++) {
        if(Math.min(...b) % index == 0){
            factors_first.push(index);
            count[index]=0;
            count2[index]=0;
        }
    };
    
    //  we find which index can be % by each number of array a
    for (const iterator of factors_first) {
        for (const iterator2 of a) {
            // console.log(iterator +" % "+iterator2+" = "+(iterator % iterator2));
            if(iterator % iterator2 ==0){
                count[iterator]+=1;
            }
        }
    };
    
    // we count the factors which 
    for (const iterator of b) {
        for (const key in count) {
        //    console.log("iter"+iterator+"%"+"key"+key+"="+iterator%key);
           if(iterator % key ==0){
            count2[key]+=1;
        }
        }
    }
    
    for (const key in count) {
        // console.log(count[key]);
        // console.log(count2[key]);
        if(count[key]==a.length && count2[key]==b.length){
            number_of_x++;
        }
    }
    
    // console.log(number_of_x);
    // console.log(count);
    // console.log(count2);
    console.log(number_of_x);
    }
    
    var a= [2,4];
    // var a= [3,4];
    // var a=[2];
    var d= [16,32,96];
    // var d= [24,48];
    // var d= [20,30,12];
    andi(a,d);
    