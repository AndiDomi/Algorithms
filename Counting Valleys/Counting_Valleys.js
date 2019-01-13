function countingValleys(n, steps) {
// n steps
// s []
var count=0;
var nr_vales=0;
for (const step of steps) {
    if(count==0 && step=='D'){
        
        nr_vales++;
    }
    if(step=='D'){
        count++;
    }else{
        count--;
    }
}
return nr_vales;
}

countingValleys(8,[ 'U','D','D','D','U','D','U','U']);