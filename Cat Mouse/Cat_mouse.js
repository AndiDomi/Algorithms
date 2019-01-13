function catAndMouse(catA, catB, mouse) {
    var diff_catA_mouse=Math.abs(catA-mouse);
    console.log("a"+diff_catA_mouse);
    var diff_catB_mouse=Math.abs(catB-mouse);
    console.log("b"+diff_catB_mouse);

    if( diff_catA_mouse < diff_catB_mouse){
        console.log("Cat A");
    }else if(diff_catA_mouse < diff_catB_mouse){
        console.log("Cat B")
    }else{
        console.log("Mouse C")
    }
}

// catAndMouse(1,2,3);
// catAndMouse(1,3,2);
catAndMouse(22 ,75 ,70);
catAndMouse(33 ,86 ,59);
catAndMouse(47 ,29 ,89);