var arr=[]

 arr[0] = [-1, -1 ,0 ,-9 ,-2, -2];
 arr[2]= [-1 ,-1, -1, -2, -3, -4];
 arr[1]= [-2, -1, -6, -8, -2, -5];
 arr[3]= [-1, -9, -2, -4, -4, -5 ];
 arr[4]= [-7, -3, -3, -2, -9, -9 ];
 arr[5]= [-1, -3, -1, -2, -4, -5 ];

function hourglassSum(arr) {
    var biggestHourGlassSumt=0;

    for (let a = 0; a < arr.length-2; a++){
        for(let b = 0; b < arr[0].length-2; b++){
            let sumUpperPart = arr[a][b] + arr[a][b+1] + arr[a][b+2];
            console.log();
            console.log(arr[a][b]+" "+arr[a][b+1]+" "+arr[a][b+2]);
            let sumMiddlePart = arr[a+1][b+1];
            console.log("   "+arr[a+1][b+1]);
            let sumBottomPart = arr[a+2][b] + arr[a+2][b+1] + arr[a+2][b+2];
            console.log(arr[a+2][b]+" "+arr[a+2][b+1]+" "+arr[a+2][b+2]);
    
            let hourglassTotal=(sumUpperPart+sumMiddlePart+sumBottomPart);
            console.log(" Total " + hourglassTotal);
            console.log();
           
            // todo : compare the biggest value
            if(a==0 && b==0){
                biggestHourGlassSum = hourglassTotal;
            }            

            if(biggestHourGlassSum <= hourglassTotal){
               biggestHourGlassSum = hourglassTotal;
               }
        }
    }
    return biggestHourGlassSum;
}
hourglassSum(arr);