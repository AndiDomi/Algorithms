function pageCount(n, p) {

    var position_of_page=Math.ceil((p+1)/2);
    var number_of_pages=Math.ceil((n+1)/2);
    var first_page=1;
    // console.log("position of the page '"+p+"' "+(position_of_page));

    if( Math.abs(first_page - position_of_page ) < Math.abs(number_of_pages - position_of_page)){
        return Math.abs(first_page - position_of_page );
    }else{
        return Math.abs(number_of_pages - position_of_page);
    }
}


pageCount(5,1);

pageCount(7,7);
pageCount(8,8);
