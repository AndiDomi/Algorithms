function breakingRecords(scores) {
    var min=scores[0];
    var max=scores[0];
    var counter_max=0;
    var counter_min=0;
    for(score of scores){

        console.log("score "+score);
        if(score > max){
            max = score;
            counter_max++;
            // console.log("Max : "+max);
        }else if(score < min){
            min = score;
            counter_min++;
            // console.log("Min : " +min)
        }
        // console.log();
        
    };


    // console.log("max: "+(counter_max));
    // console.log("min: "+ (counter_min));
    return [(counter_max),(counter_min)]
}

// var scores=[3, 4 ,21, 36, 10, 28, 35, 5, 24, 42];
var scores=[10, 5, 20, 20, 4 ,5, 2 ,25 ,1];
// var scores=[3, 4 ,21, 36, 10, 28, 35, 5, 24, 42];
// var scores=[3, 4 ,21, 36, 10, 28, 35, 5, 24, 42];
breakingRecords(scores);